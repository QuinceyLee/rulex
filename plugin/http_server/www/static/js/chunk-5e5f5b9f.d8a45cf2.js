(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e5f5b9f"],{"2a89":function(e,t,l){"use strict";l.d(t,"b",(function(){return a})),l.d(t,"a",(function(){return r})),l.d(t,"c",(function(){return o}));var i=l("b775");function a(){return Object(i["a"])({url:"inends",method:"get"})}function r(e){return Object(i["a"])({url:"inends",method:"post",data:e})}function o(e){return Object(i["a"])({method:"delete",url:"inends?uuid="+e})}},dfa9:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=this,l=t.$createElement,i=t._self._c||l;return i("el-container",{staticStyle:{height:"800px",border:"1px solid #eee"}},[i("el-main",[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v(" 规则管理")])]),i("el-button",{attrs:{type:"primary",icon:"el-icon-help"},on:{click:function(){e.createDialogVisible=!0}}},[t._v("新 建")]),i("el-button",{attrs:{type:"success",icon:"el-icon-refresh"},on:{click:t.refreshList}},[t._v("刷 新")]),i("el-dialog",{attrs:{title:"新建规则",visible:t.createDialogVisible,width:"1000px",top:"2%","show-close":!1,"before-close":function(){}},on:{"update:visible":function(e){t.createDialogVisible=e}}},[i("el-form",{ref:"createForm",attrs:{model:t.createForm,"status-icon":"",rules:t.createFormRules}},[i("el-form-item",{attrs:{label:"规则名称","label-width":"90px","label-position":"left",prop:"name"}},[i("el-input",{attrs:{placeholder:"规则名称"},model:{value:t.createForm.name,callback:function(e){t.$set(t.createForm,"name",e)},expression:"createForm.name"}})],1),i("el-form-item",{attrs:{label:"输入资源","label-width":"90px","label-position":"left",prop:"from"}},[i("el-select",{staticStyle:{width:"800px"},attrs:{multiple:"",placeholder:"请选择数据源"},model:{value:t.createForm.from,callback:function(e){t.$set(t.createForm,"from",e)},expression:"createForm.from"}},t._l(t.inEnds,(function(e){return i("el-option",{key:e.uuid,attrs:{label:e.name,value:e.uuid}},[i("span",{staticStyle:{float:"left"}},[t._v(t._s(e.uuid))]),i("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.name))])])})),1)],1),i("el-form-item",{attrs:{label:"规则回调","label-width":"90px","label-position":"left",prop:"config"}},[i("codemirror",{staticStyle:{"line-height":"1"},attrs:{options:t.options},model:{value:t.createForm.actions,callback:function(e){t.$set(t.createForm,"actions",e)},expression:"createForm.actions"}})],1),i("el-form-item",{attrs:{label:"成功回调","label-width":"90px","label-position":"left",prop:"config"}},[i("codemirror",{staticStyle:{"line-height":"1"},attrs:{options:t.options},model:{value:t.createForm.success,callback:function(e){t.$set(t.createForm,"success",e)},expression:"createForm.success"}})],1),i("el-form-item",{attrs:{label:"失败回调","label-width":"90px","label-position":"left",prop:"config"}},[i("codemirror",{staticStyle:{"line-height":"1"},attrs:{options:t.options},model:{value:t.createForm.failed,callback:function(e){t.$set(t.createForm,"failed",e)},expression:"createForm.failed"}})],1),i("el-form-item",{attrs:{label:"备注信息","label-width":"90px","label-position":"left",prop:"description"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.createForm.description,callback:function(e){t.$set(t.createForm,"description",e)},expression:"createForm.description"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(){e.createDialogVisible=!1,e.createForm={}}}},[t._v("取 消")]),i("el-button",{attrs:{type:"warning"},on:{click:t.validateRule}},[t._v("语法验证")]),i("el-button",{attrs:{type:"primary"},on:{click:t.createRule}},[t._v("提 交")])],1)],1)],1),i("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.rulesTableData,border:""}},[i("el-table-column",{attrs:{prop:"uuid",label:"UUID",width:"360"}}),i("el-table-column",{attrs:{prop:"status",label:"状态",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?i("el-tag",{attrs:{type:"success"}},[t._v("运行中")]):i("el-tag",{attrs:{type:"danger"}},[t._v("已停止")])]}}])}),i("el-table-column",{attrs:{prop:"name",label:"名称",width:"300"}}),i("el-table-column",{attrs:{prop:"description",label:"备注信息"}}),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(l){return t.details(e.row)}}},[t._v("详情")]),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(l){return t.removeRule(e.row)}}},[t._v("删除")])]}}])})],1),i("el-dialog",{attrs:{title:"规则详情",visible:t.detailDialogVisible,width:"1000px",top:"2%"},on:{"update:visible":function(e){t.detailDialogVisible=e}}},[i("el-form",{ref:"ruleDetail",attrs:{model:t.ruleDetail,"status-icon":""}},[i("el-form-item",{attrs:{label:"规则名称","label-width":"90px","label-position":"left",prop:"name"}},[i("el-input",{attrs:{placeholder:"规则名称",disabled:!0},model:{value:t.ruleDetail.name,callback:function(e){t.$set(t.ruleDetail,"name",e)},expression:"ruleDetail.name"}})],1),i("el-form-item",{attrs:{label:"输入资源","label-width":"90px","label-position":"left",prop:"from"}},[i("el-select",{staticStyle:{width:"800px"},attrs:{multiple:"",disabled:"",placeholder:"请选择数据源"},model:{value:t.ruleDetail.from,callback:function(e){t.$set(t.ruleDetail,"from",e)},expression:"ruleDetail.from"}},t._l(t.inEnds,(function(e){return i("el-option",{key:e.uuid,attrs:{label:e.name,value:e.uuid}},[i("span",{staticStyle:{float:"left"}},[t._v(t._s(e.uuid))]),i("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.name))])])})),1)],1),i("el-form-item",{attrs:{label:"规则回调","label-width":"90px","label-position":"left",prop:"config"}},[i("codemirror",{staticStyle:{"line-height":"1"},attrs:{options:t.options},model:{value:t.ruleDetail.actions,callback:function(e){t.$set(t.ruleDetail,"actions",e)},expression:"ruleDetail.actions"}})],1),i("el-form-item",{attrs:{label:"成功回调","label-width":"90px","label-position":"left",prop:"config"}},[i("codemirror",{staticStyle:{"line-height":"1"},attrs:{options:t.options},model:{value:t.ruleDetail.success,callback:function(e){t.$set(t.ruleDetail,"success",e)},expression:"ruleDetail.success"}})],1),i("el-form-item",{attrs:{label:"失败回调","label-width":"90px","label-position":"left",prop:"config"}},[i("codemirror",{staticStyle:{"line-height":"1"},attrs:{options:t.options},model:{value:t.ruleDetail.failed,callback:function(e){t.$set(t.ruleDetail,"failed",e)},expression:"ruleDetail.failed"}})],1),i("el-form-item",{attrs:{label:"备注信息","label-width":"90px","label-position":"left",prop:"description"}},[i("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:t.ruleDetail.description,callback:function(e){t.$set(t.ruleDetail,"description",e)},expression:"ruleDetail.description"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(){e.detailDialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)],1)},a=[],r=l("ade3"),o=(l("a15b"),l("2b0e")),n=l("8f94"),s=(l("a7be"),l("7ba3"),l("8eb3"),l("27f7")),c=l("5c96"),u=l("2a89"),d=l("b775");function p(){return Object(d["a"])({url:"rules",method:"get"})}function m(e){return Object(d["a"])({url:"rules",method:"post",data:e})}function f(e){return Object(d["a"])({method:"delete",url:"rules?uuid="+e})}function b(e){return Object(d["a"])({url:"validateRule",method:"post",data:e})}o["default"].use(s["a"]);var h={name:"Rule",components:{codemirror:n["codemirror"],VJsonEditor:s["a"]},methods:{onSelectChange:function(e){},removeRule:function(e){var t=this;f(e.uuid).then((function(e){Object(c["Message"])({message:e.msg,type:"success",duration:5e3}),t.getRuleList()}))},details:function(e){this.ruleDetail=e,this.detailDialogVisible=!0},refreshList:function(){this.getRuleList(),this.getInEndList()},createRule:function(){var e=this,t=this;this.$refs["createForm"].validate((function(l){return!!l&&(m(e.createForm).then((function(e){Object(c["Message"])({message:"创建成功",type:"success",duration:5e3}),t.createDialogVisible=!1,t.createForm={},t.getRuleList()})),!0)}))},getRuleList:function(){var e=this;p().then((function(t){e.rulesTableData=t.data}))},getInEndList:function(){var e=this;Object(u["b"])().then((function(t){e.inEnds=t.data}))},validateRule:function(e){b(this.createForm).then((function(e){Object(c["Message"])({message:"语法验证成功",type:"success",duration:5e3})}))}},created:function(){this.getRuleList(),this.getInEndList()},data:function(){var e;return{options:(e={tabSize:4,mode:"text/x-lua",theme:"darcula",lineNumbers:!0,line:!0,lint:!0,styleActiveLine:!0},Object(r["a"])(e,"lineNumbers",!0),Object(r["a"])(e,"foldGutter",!0),Object(r["a"])(e,"styleSelectedText",!0),Object(r["a"])(e,"matchBrackets",!0),Object(r["a"])(e,"showCursorWhenSelecting",!0),Object(r["a"])(e,"gutters",["CodeMirror-lint-markers"]),Object(r["a"])(e,"hintOptions",{completeSingle:!0}),Object(r["a"])(e,"extraKeys",{Tab:function(e){var t=Array(e.getOption("indentUnit")+1).join(" ");e.replaceSelection(t)}}),Object(r["a"])(e,"showHint",!0),e),detailOptions:{modes:["code"],mode:"code",ace:ace},ruleDetail:{},detailDialogVisible:!1,createDialogVisible:!1,createForm:{name:"",description:"",from:[],actions:"--\n--规则回调，高级功能请查看文档:https://wwhai.github.io/rulex_doc_html/index.html\n--\nActions = {\n\tfunction(data)\n\t\t--rulexlib:log(data)\n\t\treturn true, data\n\tend\n}",failed:"--\n--失败回调，高级功能请查看文档:https://wwhai.github.io/rulex_doc_html/index.html\n--\nfunction Failed(error)\n\trulexlib:log(error)\nend\n",success:'--\n--成功回调，高级功能请查看文档:https://wwhai.github.io/rulex_doc_html/index.html\n--\nfunction Success()\n\t--rulexlib:log("success")\nend\n'},inEnds:[],createFormRules:{name:[{required:!0,message:"输入名称",trigger:["blur","change"]}],description:[{required:!0,message:"输入描述",trigger:["blur","change"]}],from:[{required:!0,message:"输入资源入口",trigger:["blur","change"]}],actions:[{required:!0,message:"输入规则回调",trigger:["blur","change"]}],failed:[{required:!0,message:"输入成功回调",trigger:["blur","change"]}],success:[{required:!0,message:"输入失败回调",trigger:["blur","change"]}]},rulesTableData:[]}}},g=h,v=l("2877"),x=Object(v["a"])(g,i,a,!1,null,null,null);t["default"]=x.exports}}]);