package test

import (
	"context"
	"encoding/json"
	"os"
	"os/signal"
	"rulex/core"
	"rulex/engine"
	"rulex/plugin/demo_plugin"
	httpserver "rulex/plugin/http_server"
	"rulex/rulexrpc"
	"rulex/typex"
	"syscall"
	"testing"
	"time"

	"github.com/ngaut/log"
	"google.golang.org/grpc"
)

func Test_Modbus_LUA_Parse(t *testing.T) {
	core.InitGlobalConfig()
	c := make(chan os.Signal, 1)
	signal.Notify(c, syscall.SIGINT, syscall.SIGABRT)
	engine := engine.NewRuleEngine()
	engine.Start()

	hh := httpserver.NewHttpApiServer(2580, "/../plugin/http_server/www/", "./rulex.db", engine)

	// HttpApiServer loaded default
	if err := engine.LoadPlugin(hh); err != nil {
		log.Fatal("Rule load failed:", err)
	}
	// Load a demo plugin
	if err := engine.LoadPlugin(demo_plugin.NewDemoPlugin()); err != nil {
		log.Error("Rule load failed:", err)
	}
	// Grpc Inend
	grpcInend := typex.NewInEnd("GRPC", "Rulex Grpc InEnd", "Rulex Grpc InEnd", map[string]interface{}{
		"port": 2581,
	})

	if err := engine.LoadInEnd(grpcInend); err != nil {
		log.Error("Rule load failed:", err)
	}

	rule := typex.NewRule(engine,
		"uuid",
		"Just a test",
		"Just a test",
		[]string{grpcInend.UUID},
		`function Success() print("[LUA Success Callback]=> OK") end`,
		`
		Actions = {
			function(data)
			    print(data)
				local json = require("json")
				local V6 = json.decode(data)
				local V7 = json.encode(rulexlib:MatchBinary(">a:16 b:8 c:8", data, false))
				-- {"a":"0000000000000001","b":"00000000","c":"00000001"}
				print("[LUA Actions Callback, rulex.MatchBinary] ==>", V7)
				return true, data
			end
		}`,
		`function Failed(error) print("[LUA Failed Callback]", error) end`)
	if err := engine.LoadRule(rule); err != nil {
		log.Error(err)
	}
	conn, err := grpc.Dial("127.0.0.1:2581", grpc.WithInsecure())
	if err != nil {
		log.Error("grpc.Dial err: %v", err)
	}
	defer conn.Close()
	client := rulexrpc.NewRulexRpcClient(conn)

	resp, err := client.Work(context.Background(), &rulexrpc.Data{
		// lua 输出 {"a":"0000000000000001","b":"00000000","c":"00000001"}
		Value: string([]byte{0, 1, 0, 1}),
	})
	if err != nil {
		log.Error("grpc.Dial err: %v", err)
	}
	log.Infof("Rulex Rpc Call Result ====>>: %v", resp.GetMessage())

	time.Sleep(1 * time.Second)
	engine.Stop()
}
func Test_write(t *testing.T) {

	/*
	 *
	 * coilParams 1
	 *
	 */
	type coils struct {
		Address  uint16 `json:"address" validate:"required" title:"寄存器地址" info:""`
		Quantity uint16 `json:"quantity" validate:"required" title:"写入数量" info:""`
		Values   []byte `json:"values" validate:"required" title:"写入的值" info:""`
	}

	/*
	 *
	 * 2
	 *
	 */
	type coil struct {
		Address  uint16 `json:"address" validate:"required" title:"寄存器地址" info:""`
		Quantity uint16 `json:"quantity" validate:"required" title:"写入数量" info:""`
		Value    uint16 `json:"value" validate:"required" title:"写入的值" info:""`
	}

	/*
	 *
	 * registerParams 3
	 *
	 */
	type register struct {
		Address  uint16 `json:"address" validate:"required" title:"寄存器地址" info:""`
		Quantity uint16 `json:"quantity" validate:"required" title:"写入数量" info:""`
		Value    uint16 `json:"value" validate:"required" title:"写入的值" info:""`
	}

	/*
	 *
	 * 4
	 *
	 */
	type registers struct {
		Address  uint16 `json:"address" validate:"required" title:"寄存器地址" info:""`
		Quantity uint16 `json:"quantity" validate:"required" title:"写入数量" info:""`
		Values   []byte `json:"values" validate:"required" title:"写入的值" info:""`
	}

	type dataM struct {
		Type   int         `json:"type" validate:"required"`
		Params interface{} `json:"params" validate:"required"`
	}
	d := dataM{Type: 1, Params: []registers{{
		Address: 1, Quantity: 1, Values: []byte{1},
	}},
	}
	b, _ := json.MarshalIndent(d, "", " ")
	t.Log(string(b))
}
