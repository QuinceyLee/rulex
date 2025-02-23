package httpserver

import (
	"net/http"
	"rulex/statistics"
	"rulex/typex"
	"runtime"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/shirou/gopsutil/cpu"
	"github.com/shirou/gopsutil/disk"
)

func Index(c *gin.Context, hh *HttpApiServer, e typex.RuleX) {
	c.HTML(200, "index.html", nil)
}

/*
*
* 健康检查接口, 一般用来监视是否工作
*
 */
func Ping(c *gin.Context, hh *HttpApiServer, e typex.RuleX) {
	c.Writer.Write([]byte("PONG"))
	c.Writer.Flush()
}

//
// Get all plugins
//
func Plugins(c *gin.Context, hh *HttpApiServer, e typex.RuleX) {
	data := []interface{}{}
	plugins := e.AllPlugins()
	plugins.Range(func(key, value interface{}) bool {
		data = append(data, value.(typex.XPlugin).PluginMetaInfo())
		return true
	})
	c.JSON(http.StatusOK, Result{
		Code: http.StatusOK,
		Msg:  "Success",
		Data: data,
	})
}
func bToMb(b uint64) uint64 {
	return b / 1024 / 1024
}

//
// Get system infomation
//
func System(c *gin.Context, hh *HttpApiServer, e typex.RuleX) {
	cpuPercent, _ := cpu.Percent(time.Millisecond, true)
	parts, _ := disk.Partitions(true)
	diskInfo, _ := disk.Usage(parts[0].Mountpoint)
	// For info on each, see: https://golang.org/pkg/runtime/#MemStats
	var m runtime.MemStats
	runtime.ReadMemStats(&m)
	c.JSON(http.StatusOK, Result{
		Code: http.StatusOK,
		Msg:  "Success",
		Data: gin.H{
			"version":    e.Version().Version,
			"diskInfo":   int(diskInfo.UsedPercent),
			"system":     bToMb(m.Sys),
			"alloc":      bToMb(m.Alloc),
			"total":      bToMb(m.TotalAlloc),
			"cpuPercent": cpuPercent,
			"osArch":     runtime.GOOS + "-" + runtime.GOARCH,
		},
	})
}

//
// Get all Drivers
//
func Drivers(c *gin.Context, hh *HttpApiServer, e typex.RuleX) {
	data := []interface{}{}
	inEnds := e.AllInEnd()
	inEnds.Range(func(key, value interface{}) bool {
		if value.(*typex.InEnd).Resource.Driver() != nil {
			data = append(data, value.(*typex.InEnd).Resource.Driver().DriverDetail())
		}
		return true
	})
	c.JSON(200, Result{
		Code: 200,
		Msg:  "Success",
		Data: data,
	})
}

//
// Get statistics data
//
func Statistics(c *gin.Context, hh *HttpApiServer, e typex.RuleX) {
	c.JSON(http.StatusOK, Result{
		Code: http.StatusOK,
		Msg:  "Success",
		Data: statistics.AllStatistics(),
	})
}

//
// Get statistics data
//
func ResourceCount(c *gin.Context, hh *HttpApiServer, e typex.RuleX) {
	allInEnd := e.AllInEnd()
	allOutEnd := e.AllOutEnd()
	allRule := e.AllRule()
	plugins := e.AllPlugins()
	var c1, c2, c3, c4 int
	allInEnd.Range(func(key, value interface{}) bool {
		c1 += 1
		return true
	})
	allOutEnd.Range(func(key, value interface{}) bool {
		c2 += 1
		return true
	})
	allRule.Range(func(key, value interface{}) bool {
		c3 += 1
		return true
	})
	plugins.Range(func(key, value interface{}) bool {
		c4 += 1
		return true
	})
	c.JSON(http.StatusOK, Result{
		Code: http.StatusOK,
		Msg:  "Success",
		Data: map[string]int{
			"inends":  c1,
			"outends": c2,
			"rules":   c3,
			"plugins": c4,
		},
	})
}
