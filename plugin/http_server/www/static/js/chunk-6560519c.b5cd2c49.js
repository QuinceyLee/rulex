(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6560519c"],{"1a5e":function(e,t,r){},"1c7e":function(e,t,r){var a=r("b622"),l=a("iterator"),n=!1;try{var i=0,o={next:function(){return{done:!!i++}},return:function(){n=!0}};o[l]=function(){return this},Array.from(o,(function(){throw 2}))}catch(s){}e.exports=function(e,t){if(!t&&!n)return!1;var r=!1;try{var a={};a[l]=function(){return{next:function(){return{done:r=!0}}}},e(a)}catch(s){}return r}},"2a89":function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return i}));var a=r("b775");function l(){return Object(a["a"])({url:"inends",method:"get"})}function n(e){return Object(a["a"])({url:"inends",method:"post",data:e})}function i(e){return Object(a["a"])({method:"delete",url:"inends?uuid="+e})}},"35a1":function(e,t,r){var a=r("f5df"),l=r("3f8c"),n=r("b622"),i=n("iterator");e.exports=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||l[a(e)]}},"4df4":function(e,t,r){"use strict";var a=r("0366"),l=r("7b0b"),n=r("9bdd"),i=r("e95a"),o=r("50c4"),s=r("8418"),u=r("35a1");e.exports=function(e){var t,r,c,d,p,m,f=l(e),g="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,y=void 0!==h,v=u(f),q=0;if(y&&(h=a(h,b>2?arguments[2]:void 0,2)),void 0==v||g==Array&&i(v))for(t=o(f.length),r=new g(t);t>q;q++)m=y?h(f[q],q):f[q],s(r,q,m);else for(d=v.call(f),p=d.next,r=new g;!(c=p.call(d)).done;q++)m=y?n(d,h,[c.value,q],!0):c.value,s(r,q,m);return r.length=q,r}},"6c1f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticStyle:{height:"800px",border:"1px solid #eee"}},[r("el-main",[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("输入资源管理")])]),r("el-button",{attrs:{type:"primary",icon:"el-icon-help"},on:{click:function(t){e.status.createDialogVisible=!0}}},[e._v(" 新 建 ")]),r("el-button",{attrs:{type:"success",icon:"el-icon-refresh"},on:{click:e.refreshList}},[e._v(" 刷 新 ")]),r("el-dialog",{attrs:{width:"900px",title:"新建资源",top:"10vh","show-close":!1,"close-on-click-modal":!1,visible:e.status.createDialogVisible},on:{"update:visible":function(t){return e.$set(e.status,"createDialogVisible",t)},closed:e.createDialogClosed}},[r("el-form",{ref:"createFormRef",attrs:{model:e.createForm,rules:e.createFormRules,"label-width":"78px"}},[r("el-form-item",{attrs:{label:"资源名称","label-position":"left",prop:"name"}},[r("el-input",{attrs:{placeholder:"资源名称",maxlength:"20",clearable:""},model:{value:e.createForm.name,callback:function(t){e.$set(e.createForm,"name",t)},expression:"createForm.name"}})],1),r("el-form-item",{attrs:{label:"资源类型","label-position":"left",prop:"type"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"资源类型",filterable:"",clearable:""},on:{change:e.onSelectChange},model:{value:e.createForm.type,callback:function(t){e.$set(e.createForm,"type",t)},expression:"createForm.type"}},e._l(e.protocolOptions,(function(e,t){return r("el-option",{key:t,attrs:{label:e.text,value:e.value}})})),1)],1),e.status.configFormVisible?r("el-form-item",{attrs:{label:"资源配置","label-position":"left"}},[r("dynamic-form",{ref:"dynamicFormRef",attrs:{options:e.jsonConfig,protocol:e.protocol},on:{onChanged:function(t){return e.dynamicFormChanged(t)}}})],1):e._e(),r("el-form-item",{attrs:{label:"备注信息","label-position":"left",prop:"description"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"备注信息",maxlength:"50",clearable:""},model:{value:e.createForm.description,callback:function(t){e.$set(e.createForm,"description",t)},expression:"createForm.description"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.status.createDialogVisible=!1}}},[e._v(" 取 消 ")]),r("el-button",{attrs:{type:"primary",loading:e.status.createLoading},on:{click:e.createInEnd}},[e._v(" 提 交 ")])],1)],1)],1),r("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{prop:"uuid",label:"UUID",width:"340px"}}),r("el-table-column",{attrs:{prop:"type",label:"类型",width:"200px",filters:e.protocolOptions,"filter-method":e.filterHandler,"filter-placement":"bottom-end","column-key":"type"}}),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),r("el-table-column",{attrs:{prop:"description",label:"信息"}}),r("el-table-column",{attrs:{prop:"state",label:"状态",filters:[{text:"正常",value:1},{text:"异常",value:0}],"filter-method":e.filterState,width:"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.state?r("el-tag",{attrs:{type:"success"}},[e._v("正常")]):r("el-tag",{attrs:{type:"danger"}},[e._v("异常")])]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(r){return e.details(t.row)}}},[e._v(" 详情 ")]),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return e.removeInEnd(t.row)}}},[e._v(" 删除 ")])]}}])})],1),r("el-dialog",{attrs:{title:"输出目标详情",visible:e.status.detailDialogVisible,width:"900px"},on:{"update:visible":function(t){return e.$set(e.status,"detailDialogVisible",t)}}},[r("el-descriptions",{attrs:{border:"",column:"1","label-style":e.LS}},[r("el-descriptions-item",{attrs:{label:"type"}},[r("el-tag",{attrs:{size:"small"}},[e._v(e._s(e.inEndDetail.type))])],1),r("el-descriptions-item",{attrs:{label:"name"}},[e._v(" "+e._s(e.inEndDetail.name)+" ")]),e._l(e.inEndDetail.config,(function(t,a){return r("el-descriptions-item",{key:a,attrs:{label:a}},[e._v(" "+e._s(t)+" ")])})),r("el-descriptions-item",{attrs:{label:"description"}},[e._v(" "+e._s(e.inEndDetail.description)+" ")])],2),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.status.detailDialogVisible=!1}}},[e._v(" 确 定 ")])],1)],1)],1)],1)},l=[],n=r("5530");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function o(e){if(Array.isArray(e))return i(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function s(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function u(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e){return o(e)||s(e)||u(e)||c()}r("e9c4"),r("b64b"),r("99af");var p=r("2a89"),m=r("5c96"),f=r("ade3"),g={MQTT:[{type:"el-input-text",name:"host",label:"主机地址",value:"127.0.0.1",required:!0,placeholder:"127.0.0.1"},{type:"el-input-number",name:"port",label:"服务端口",value:1883,required:!0,placeholder:"1883"},{type:"el-input-text",name:"topic",label:"订阅主题",value:"rulex-data-1",required:!0,placeholder:"rulex-data-1"},{type:"el-input-text",name:"clientId",label:"客户端ID",value:"rulex-1",required:!0,placeholder:"rulex-1"},{type:"el-input-text",name:"username",value:"rulex-1",label:"用  户",required:!0,placeholder:"rulex-1"},{type:"el-input-text",name:"password",label:"密  码",value:"",required:!0,placeholder:"rulex-1"}],HTTP:[{type:"el-input-number",name:"port",label:"服务端口",value:2581,required:!0,placeholder:"2581"}],RULEX_UDP:[{type:"el-input-text",name:"host",label:"服务地址",value:"127.0.0.1",required:!0,placeholder:"127.0.0.1"},{type:"el-input-number",name:"port",label:"服务端口",value:2582,required:!0,placeholder:"2582"},{type:"el-input-number",name:"maxDataLength",label:"最大包长",value:1024,required:!0,placeholder:"1024"}],COAP:[{type:"el-input-number",name:"port",label:"服务端口",value:2583,required:!0,placeholder:"2583"}],GRPC:[{type:"el-input-number",label:"服务端口",name:"port",value:2584,required:!0,placeholder:"2584"}],UART_MODULE:[{type:"el-input-text",name:"address",label:"串口名称",value:"/dev/ttyS1",required:!0,placeholder:"uart1"},{type:"el-input-number",name:"baudRate",label:"波特率",value:115200,required:!0,placeholder:"115200"},{type:"el-input-number",name:"timeout",label:"超时时长",value:5,required:!0,placeholder:"5"},{type:"el-input-number",name:"dataBits",label:"数据位",value:8,required:!0,placeholder:"8"},{type:"el-select",name:"parity",label:"奇偶校验",value:"N",required:!0,placeholder:"请选择",selectOptions:[{value:"",label:"请选择"},{value:"N",label:"无校验"},{value:"E",label:"偶校验"},{value:"O",label:"奇校验"}]},{type:"el-input-number",name:"stopBits",label:"停止位",value:1,required:!0,placeholder:"1"}],MODBUS_TCP_MASTER:[{type:"el-input-number",name:"timeout",label:"超时时长",value:10,required:!0,placeholder:"10"},{type:"el-input-number",name:"slaverId",label:"从机地址",value:1,required:!0,placeholder:"1"},{type:"el-input-number",name:"frequency",label:"采集频率",value:5,required:!0,placeholder:"5"},{type:"el-select",name:"mode",label:"工作模式",value:"RTU",required:!0,placeholder:"RTU",selectOptions:[{value:"TCP",label:"TCP"},{value:"RTU",label:"RTU"}]},{type:"el-inline",label:"串口配置",name:"rtuConfig",children:[{type:"el-input-text",name:"uart",label:"串口名称",value:"/dev/ttys01",required:!0,placeholder:"/dev/ttys01"},{type:"el-input-number",name:"baudRate",label:"波特率",value:115200,required:!0,placeholder:"115200"}]},{type:"el-inline",label:"TCP配置",name:"tcpConfig",children:[{type:"el-input-text",name:"ip",label:"采集地址",value:"127.0.0.1",required:!0,placeholder:"127.0.0.1"},{type:"el-input-number",name:"port",label:"采集端口",value:1502,required:!0,placeholder:"1502"}]},{type:"el-inline",label:"注册参数",name:"registerParams",children:[{type:"el-input-number",name:"function",label:"功能代码",value:3,required:!0,placeholder:"3"},{type:"el-input-number",name:"address",label:"起始地址",value:0,required:!0,placeholder:"0"},{type:"el-input-number",name:"quantity",label:"读取数量",value:10,required:!0,placeholder:"10"}]}],MODBUS_RTU_MASTER:[{type:"el-input-number",name:"timeout",label:"超时时长",value:10,required:!0,placeholder:"10"},{type:"el-input-number",name:"slaverId",label:"从机地址",value:1,required:!0,placeholder:"1"},{type:"el-input-number",name:"frequency",label:"采集频率",value:5,required:!0,placeholder:"5"},{type:"el-select",name:"mode",label:"工作模式",value:"RTU",required:!0,placeholder:"RTU",selectOptions:[{value:"TCP",label:"TCP"},{value:"RTU",label:"RTU"}]},{type:"el-inline",label:"串口配置",name:"rtuConfig",hidden:!0,children:[{type:"el-input-text",name:"uart",label:"串口名称",value:"/dev/ttys01",required:!0,placeholder:"/dev/ttys01"},{type:"el-input-number",name:"baudRate",label:"波特率",value:115200,required:!0,placeholder:"115200"}]},{type:"el-inline",label:"TCP配置",name:"tcpConfig",children:[{type:"el-input-text",name:"ip",label:"主机地址",value:"127.0.0.1",required:!0,placeholder:"127.0.0.1"},{type:"el-input-number",name:"port",label:"主机端口",value:1502,required:!0,placeholder:"1502"}]},{type:"el-inline",label:"注册参数",name:"registerParams",children:[{type:"el-input-number",name:"function",label:"Modbus 功能",value:3,required:!0,placeholder:"3"},{type:"el-input-number",name:"address",label:"起始地址",value:0,required:!0,placeholder:"0"},{type:"el-input-number",name:"quantity",label:"读取数量",value:10,required:!0,placeholder:"10"}]}],SNMP_SERVER:[{type:"el-input-number",name:"frequency",label:"采集频率",value:5,required:!0,placeholder:"5"},{type:"el-input-number",name:"timeout",label:"超时时长",value:5,required:!0,placeholder:"5"},{type:"el-inline",label:"目标配置",name:"targets",children:[{type:"el-input-text",name:"target",label:"主机地址",value:"127.0.0.1",required:!0,placeholder:"127.0.0.1"},{type:"el-input-number",name:"port",label:"主机端口",value:1161,required:!0,placeholder:"1161"},{type:"el-select",name:"transport",label:"传输模式",value:"udp",required:!0,placeholder:"udp",selectOptions:[{value:"udp",label:"UDP"}]},Object(f["a"])({type:"el-input-text",name:"community",label:"社区名称",value:"public",required:!0,placeholder:"请选择"},"value","public"),{type:"el-input-number",name:"version",label:"协议版本",value:3,required:!0,placeholder:"3"}]}]},b=g,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dynamic-form"},[r("el-form",{ref:"configFormRef",attrs:{model:e.configForm,rules:e.configFormRules,"label-width":"auto","label-position":"left"}},[e._l(e.options,(function(t){return["el-inline"!==t.type?r("el-form-item",{key:t.name,attrs:{label:t.label,prop:t.name,required:t.required}},["el-input-text"==t.type?r("el-input",{attrs:{type:"text",size:"small",placeholder:t.placeholder,clearable:"",maxlength:"20"},model:{value:e.configForm[t.name],callback:function(r){e.$set(e.configForm,t.name,"string"===typeof r?r.trim():r)},expression:"configForm[item.name]"}}):e._e(),"el-input-number"==t.type?r("el-input-number",{staticStyle:{width:"100%"},attrs:{size:"small","controls-position":"right",placeholder:t.placeholder},model:{value:e.configForm[t.name],callback:function(r){e.$set(e.configForm,t.name,"string"===typeof r?r.trim():r)},expression:"configForm[item.name]"}}):e._e(),"el-select"===t.type?r("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",size:"small",placeholder:t.placeholder},model:{value:e.configForm[t.name],callback:function(r){e.$set(e.configForm,t.name,r)},expression:"configForm[item.name]"}},e._l(t.selectOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e()],1):e._e(),"el-inline"===t.type?r("el-row",{key:t.name,attrs:{gutter:15}},e._l(t.children,(function(a){return r("el-col",{key:a.name,attrs:{span:e.calcSpan(t.children)}},[r("el-form-item",{attrs:{label:a.label,prop:t.name+"."+a.name}},["el-input-text"==a.type?r("el-input",{attrs:{size:"small",clearable:"",placeholder:a.placeholder},model:{value:e.configForm[t.name][a.name],callback:function(r){e.$set(e.configForm[t.name],a.name,r)},expression:"configForm[item.name][childrenItem.name]"}}):e._e(),"el-input-number"==a.type?r("el-input-number",{staticStyle:{width:"100%"},attrs:{size:"small","controls-position":"right",clearable:"",placeholder:a.placeholder},model:{value:e.configForm[t.name][a.name],callback:function(r){e.$set(e.configForm[t.name],a.name,r)},expression:"configForm[item.name][childrenItem.name]"}}):e._e(),"el-select"==a.type?r("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",size:"small",placeholder:a.placeholder},model:{value:e.configForm[t.name][a.name],callback:function(r){e.$set(e.configForm[t.name],a.name,r)},expression:"configForm[item.name][childrenItem.name]"}},e._l(a.selectOptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e()],1)],1)})),1):e._e()]})),e._l(e.configForm.moreRegisterParams,(function(t,a){return r("el-row",{key:a,attrs:{gutter:15}},[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"函数",prop:"moreRegisterParams."+a+".function"}},[r("el-input-number",{staticStyle:{width:"100%"},attrs:{size:"small","controls-position":"right",clearable:""},model:{value:t.function,callback:function(r){e.$set(t,"function",r)},expression:"item.function"}})],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"地址",prop:"moreRegisterParams."+a+".address"}},[r("el-input-number",{staticStyle:{width:"100%"},attrs:{size:"small","controls-position":"right",clearable:""},model:{value:t.address,callback:function(r){e.$set(t,"address",r)},expression:"item.address"}})],1)],1),r("el-col",{attrs:{span:7}},[r("el-form-item",{attrs:{label:"数量",prop:"moreRegisterParams."+a+".quantity"}},[r("el-input-number",{staticStyle:{width:"100%"},attrs:{size:"small","controls-position":"right",clearable:""},model:{value:t.quantity,callback:function(r){e.$set(t,"quantity",r)},expression:"item.quantity"}})],1)],1),r("el-col",{attrs:{span:1}},[r("i",{staticClass:"el-icon-delete",staticStyle:{cursor:"pointer"},on:{click:function(r){return e.deleteRegisterParams(t,a)}}})])],1)})),"MODBUS_TCP_MASTER"===e.protocol||"MODBUS_RTU_MASTER"===e.protocol?r("el-form-item",{staticClass:"button-item"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.addRegisterParams}},[e._v(" 增加参数 ")])],1):e._e()],2)],1)},y=[],v=(r("159b"),r("a434"),{props:{options:{type:Array,required:!0},protocol:{type:String,required:!0}},data:function(){return{configForm:{moreRegisterParams:[]},configFormRules:{host:[{required:!0,message:"请输入服务地址",trigger:["blur","change"]}],port:[{required:!0,message:"请输入端口号",trigger:["blur","change"]}],clientId:[{required:!0,message:"请输入客户端ID",trigger:["blur","change"]}],topic:[{required:!0,message:"请输入订阅Topic",trigger:["blur","change"]}],username:[{required:!0,message:"请输入MQTT用户名",trigger:["blur","change"]}],password:[{required:!0,message:"请输入订阅MQTT密码",trigger:["blur","change"]}],maxDataLength:[{required:!0,message:"请输入最大包长",trigger:["blur","change"]}],address:[{required:!0,message:"请输入最大地址",trigger:["blur","change"]}],baudRate:[{required:!0,message:"请输入波特率",trigger:["blur","change"]}],timeout:[{required:!0,message:"请输入超时时长",trigger:["blur","change"]}],dataBits:[{required:!0,message:"请输入数据位长度",trigger:["blur","change"]}],parity:[{required:!0,message:"请选择奇偶校验位",trigger:["blur","change"]}],stopBits:[{required:!0,message:"请输入停止位",trigger:["blur","change"]}],slaverId:[{required:!0,message:"请输入从机ID",trigger:["blur","change"]}],frequency:[{required:!0,message:"请输入频率",trigger:["blur","change"]}],"rtuConfig.uart":[{required:!0,message:"请输入串口",trigger:["blur","change"]}],"rtuConfig.baudRate":[{required:!0,message:"请输入波特率",trigger:["blur","change"]}],"tcpConfig.ip":[{required:!0,message:"请输入IP地址",trigger:["blur","change"]}],"tcpConfig.port":[{required:!0,message:"请输入端口号",trigger:["blur","change"]}],"registerParams.function":[{required:!0,message:"请输入函数",trigger:["blur","change"]}],"registerParams.address":[{required:!0,message:"请输入地址",trigger:["blur","change"]}],"registerParams.quantity":[{required:!0,message:"请输入数量",trigger:["blur","change"]}],"targets.target":[{required:!0,message:"请输入目标地址",trigger:["blur","change"]}],"targets.port":[{required:!0,message:"请输入端口号",trigger:["blur","change"]}],"targets.community":[{required:!0,message:"请选择是否开放",trigger:["blur","change"]}],"targets.transport":[{required:!0,message:"请输入传输模式",trigger:["blur","change"]}],"targets.version":[{required:!0,message:"请输入版本",trigger:["blur","change"]}],"targets.dataModels":[{required:!0,message:"请输入数据模型",trigger:["blur","change"]}]}}},watch:{options:function(e){this.setDefaultValue()}},created:function(){this.setDefaultValue()},methods:{setDefaultValue:function(){var e=this;this.configForm={moreRegisterParams:[]},this.options&&this.options.length>0&&(this.options.forEach((function(t,r){t.children?(e.configForm[t.name]={},t.children.forEach((function(r,a){Object.prototype.hasOwnProperty.call(e.configForm[t.name],r.name)||(e.configForm[t.name][r.name]=r.value)}))):e.configForm[t.name]=t.value})),this.configForm=Object.assign({},this.configForm))},addRegisterParams:function(){this.configForm.moreRegisterParams.push({function:0,address:0,quantity:0})},deleteRegisterParams:function(e,t){this.configForm.moreRegisterParams.splice(t,1)},validateForm:function(){var e=this,t=null;return this.$refs.configFormRef.validate((function(r){r?(t=!0,e.$emit("onChanged",e.configForm)):t=!1})),t},calcSpan:function(e){var t=e.length;return 2===t?12:3===t?8:6===t?24:void 0}}}),q=v,x=(r("e8ee"),r("2877")),F=Object(x["a"])(q,h,y,!1,null,"133bfce3",null),S=F.exports,R={name:"InEnd",components:{DynamicForm:S},data:function(){return{LS:{width:"120px"},createForm:{type:"",name:"",description:"",config:{}},createFormRules:{type:[{required:!0,message:"输入类型",trigger:["blur","change"]}],name:[{required:!0,message:"输入名称",trigger:["blur","change"]}],description:[{required:!0,message:"输入描述",trigger:["blur","change"]}]},protocolOptions:[{text:"MQTT 协议接入",value:"MQTT"},{text:"HTTP 协议接入",value:"HTTP"},{text:"UDP 协议接入",value:"RULEX_UDP"},{text:"COAP 协议接入",value:"COAP"},{text:"GRPC 协议接入",value:"GRPC"},{text:"通用串口接入",value:"UART_MODULE"},{text:"MODBUS TCP MASTER 模式",value:"MODBUS_TCP_MASTER"},{text:"MODBUS RTU MASTER 模式",value:"MODBUS_RTU_MASTER"},{text:"SNMP 协议接入",value:"SNMP_SERVER"}],jsonConfig:[],tableData:[],protocol:"",status:{createLoading:!1,createDialogVisible:!1,detailDialogVisible:!1,configFormVisible:!1},inEndDetail:{}}},created:function(){this.getList()},methods:{onSelectChange:function(e){this.protocol=e,this.jsonConfig=b[e],this.status.configFormVisible=!0},createDialogClosed:function(){this.status.configFormVisible=!1,this.status.createLoading=!1,this.$refs.createFormRef.resetFields(),this.createForm=this.$options.data().createForm},dynamicFormChanged:function(e){this.createForm.config=JSON.parse(JSON.stringify(e))},isEmpty:function(e){return!("number"===typeof e&&!isNaN(e))&&(!e||Object.keys(e).length<1)},getList:function(){var e=this;Object(p["b"])().then((function(t){e.tableData=t.data}))},createInEnd:function(){var e=this;this.$refs.createFormRef.validate((function(t){if(t){var r=e.$refs["dynamicFormRef"].validateForm();if(r){var a=JSON.parse(JSON.stringify(e.createForm));if(a.config.registerParams)if(e.isEmpty(a.config.moreRegisterParams)){var l=[],i=Object(n["a"])({},a.config.registerParams);l.push(i),delete a.config.registerParams,a.config.registerParams=[].concat(l)}else{var o=d(a.config.moreRegisterParams),s=Object(n["a"])({},a.config.registerParams);o.push(s),delete a.config.registerParams,a.config.registerParams=o}return"MODBUS_TCP_MASTER"===a.type?a.config.mode="TCP":"MODBUS_RTU_MASTER"===a.type&&(a.config.mode="RTU"),delete a.config.moreRegisterParams,e.status.createLoading=!0,Object(p["a"])(a).then((function(t){Object(m["Message"])({message:"创建成功",type:"success",duration:5e3}),e.getList(),e.status.createDialogVisible=!1})).catch((function(){e.status.createLoading=!1})),!0}return!1}return!1}))},details:function(e){this.inEndDetail=e,this.status.detailDialogVisible=!0},removeInEnd:function(e){var t=this;Object(p["c"])(e.uuid).then((function(e){Object(m["Message"])({message:e.msg,type:"success",duration:5e3}),t.getList()}))},refreshList:function(){this.getList(),Object(m["Message"])({message:"刷新成功",type:"success",duration:5e3})},filterHandler:function(e,t){return t.type===e},filterState:function(e,t){return t.state===e}}},_=R,P=Object(x["a"])(_,a,l,!1,null,"7f2d4c38",null);t["default"]=P.exports},"9bdd":function(e,t,r){var a=r("825a");e.exports=function(e,t,r,l){try{return l?t(a(r)[0],r[1]):t(r)}catch(i){var n=e["return"];throw void 0!==n&&a(n.call(e)),i}}},a434:function(e,t,r){"use strict";var a=r("23e7"),l=r("23cb"),n=r("a691"),i=r("50c4"),o=r("7b0b"),s=r("65f0"),u=r("8418"),c=r("1dde"),d=r("ae40"),p=c("splice"),m=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,g=Math.min,b=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!m},{splice:function(e,t){var r,a,c,d,p,m,y=o(this),v=i(y.length),q=l(e,v),x=arguments.length;if(0===x?r=a=0:1===x?(r=0,a=v-q):(r=x-2,a=g(f(n(t),0),v-q)),v+r-a>b)throw TypeError(h);for(c=s(y,a),d=0;d<a;d++)p=q+d,p in y&&u(c,d,y[p]);if(c.length=a,r<a){for(d=q;d<v-a;d++)p=d+a,m=d+r,p in y?y[m]=y[p]:delete y[m];for(d=v;d>v-a+r;d--)delete y[d-1]}else if(r>a)for(d=v-a;d>q;d--)p=d+a-1,m=d+r-1,p in y?y[m]=y[p]:delete y[m];for(d=0;d<r;d++)y[d+q]=arguments[d+2];return y.length=v-a+r,c}})},a630:function(e,t,r){var a=r("23e7"),l=r("4df4"),n=r("1c7e"),i=!n((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:i},{from:l})},d28b:function(e,t,r){var a=r("746f");a("iterator")},e01a:function(e,t,r){"use strict";var a=r("23e7"),l=r("83ab"),n=r("da84"),i=r("5135"),o=r("861d"),s=r("9bf2").f,u=r("e893"),c=n.Symbol;if(l&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var d={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new c(e):void 0===e?c():c(e);return""===e&&(d[t]=!0),t};u(p,c);var m=p.prototype=c.prototype;m.constructor=p;var f=m.toString,g="Symbol(test)"==String(c("test")),b=/^Symbol\((.*)\)[^)]+$/;s(m,"description",{configurable:!0,get:function(){var e=o(this)?this.valueOf():this,t=f.call(e);if(i(d,e))return"";var r=g?t.slice(7,-1):t.replace(b,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:p})}},e8ee:function(e,t,r){"use strict";r("1a5e")},e95a:function(e,t,r){var a=r("b622"),l=r("3f8c"),n=a("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(l.Array===e||i[n]===e)}},e9c4:function(e,t,r){var a=r("23e7"),l=r("d066"),n=r("d039"),i=l("JSON","stringify"),o=/[\uD800-\uDFFF]/g,s=/^[\uD800-\uDBFF]$/,u=/^[\uDC00-\uDFFF]$/,c=function(e,t,r){var a=r.charAt(t-1),l=r.charAt(t+1);return s.test(e)&&!u.test(l)||u.test(e)&&!s.test(a)?"\\u"+e.charCodeAt(0).toString(16):e},d=n((function(){return'"\\udf06\\ud834"'!==i("\udf06\ud834")||'"\\udead"'!==i("\udead")}));i&&a({target:"JSON",stat:!0,forced:d},{stringify:function(e,t,r){var a=i.apply(null,arguments);return"string"==typeof a?a.replace(o,c):a}})},fb6a:function(e,t,r){"use strict";var a=r("23e7"),l=r("861d"),n=r("e8b5"),i=r("23cb"),o=r("50c4"),s=r("fc6a"),u=r("8418"),c=r("b622"),d=r("1dde"),p=r("ae40"),m=d("slice"),f=p("slice",{ACCESSORS:!0,0:0,1:2}),g=c("species"),b=[].slice,h=Math.max;a({target:"Array",proto:!0,forced:!m||!f},{slice:function(e,t){var r,a,c,d=s(this),p=o(d.length),m=i(e,p),f=i(void 0===t?p:t,p);if(n(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?l(r)&&(r=r[g],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(d,m,f);for(a=new(void 0===r?Array:r)(h(f-m,0)),c=0;m<f;m++,c++)m in d&&u(a,c,d[m]);return a.length=c,a}})}}]);