webpackJsonp([2],{"3fs2":function(e,t,a){var s=a("RY/4"),r=a("dSzd")("iterator"),i=a("/bQp");e.exports=a("FeBl").getIteratorMethod=function(e){if(void 0!=e)return e[r]||e["@@iterator"]||i[s(e)]}},BO1k:function(e,t,a){e.exports={default:a("fxRn"),__esModule:!0}},"RY/4":function(e,t,a){var s=a("R9M2"),r=a("dSzd")("toStringTag"),i="Arguments"==s(function(){return arguments}());e.exports=function(e){var t,a,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),r))?a:i?s(t):"Object"==(o=s(t))&&"function"==typeof t.callee?"Arguments":o}},TLVG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("BO1k"),r=a.n(s),i=a("hOPP"),o=a("Tftl"),l={components:{Button:i.a,SolidButton:o.a},data:function(){return{shouOrHied:!1,userId:"",subjectCode:"",subjectCodeSearch:"",adds:{text:"新增",type:"icon-add",icon:"el-icon-plus"},edits:{text:"编辑",type:"icon-edit",icon:"el-icon-edit"},out:{text:"查看",type:"icon-search",icon:"el-icon-search"},WhetherSignOrNotList:[{custType:0,custName:"不可签收"},{custType:1,custName:"可签收"}],dialogVisible:!1,savetype:"",editId:"",disable:!1,reqParams:{name:"",phone:"",subject:"",id:"",examineId:""},loading:!1,options4:[],options5:[],currentPage4:1,options:[{value:"0",label:"申请待审核"},{value:"1",label:"审核通过"},{value:"2",label:"审核不通过"}],customerType:"",customerTypeSearch:"",trueOrfalse:!1,trueOrfalses:!1,customerList:[],optionsMain:[],optionsMainSearch:[],tableData:[],currentPage1:5,total:0,clickPageNum:"1",clickPagerows:"10",newOptions:[],form:{name:"",phone:"",addSubject:"",newDealer:[],WhetherSignOrNot:""},temporaryId:"",formLabelWidth:"74px",title:"",plus:!1,system:[],list:[],setupDealer:[],subjectIdarray:[]}},watch:{plus:function(e){0==e&&(this.shouOrHied=!1,this.trueOrfalses=!1,this.trueOrfalse=!1)}},methods:{customerTypeSelect:function(e){2==e?(this.shouOrHied=!1,this.trueOrfalses=!0,this.trueOrfalse=!1,this.form.newDealer=[],this.newOptions=[],this.form.WhetherSignOrNot=""):1==e?(this.shouOrHied=!1,this.trueOrfalses=!0,this.trueOrfalse=!0,this.form.addSubject="",this.form.newDealer=[],this.newOptions=[],this.form.WhetherSignOrNot=""):3==e&&(this.shouOrHied=!0,this.trueOrfalses=!1,this.trueOrfalse=!1,this.form.WhetherSignOrNot="")},customerTypeSele:function(){var e=this;e.$api.post("crm/customer/getByUserId",{id:e.userId},function(t){e.customerList=t.repData},function(e){})},selctMainSearch:function(e){this.options5=[],this.reqParams.id="";var t=!0,a=!1,s=void 0;try{for(var i,o=r()(this.optionsMainSearch);!(t=(i=o.next()).done);t=!0){var l=i.value;e==l.id&&(this.subjectCodeSearch=l.code)}}catch(e){a=!0,s=e}finally{try{!t&&o.return&&o.return()}finally{if(a)throw s}}},selctMain:function(e){var t=!0,a=!1,s=void 0;try{for(var i,o=r()(this.optionsMain);!(t=(i=o.next()).done);t=!0){var l=i.value;e==l.id&&(this.subjectCode=l.code)}}catch(e){a=!0,s=e}finally{try{!t&&o.return&&o.return()}finally{if(a)throw s}}this.newOptions=[],this.form.newDealer=[]},distributor:function(e,t,a){return 1==e.type?e.anjiDealerName:e.anjiWarehouseName},toExamine:function(){var e=this.list.length;if(this.subjectIdarray=[],e>=1){this.dialogVisible=!0;for(var t=0;t<this.list.length;t++)this.subjectIdarray.push(this.list[t].id.toString())}else this.$message({message:"未勾选数据",type:"warnig"})},reviewPass:function(){this.auditMethod(1)},noReviewPass:function(){this.auditMethod(2)},auditMethod:function(e){var t=this,a=this;a.$api.post("crm/customer/checkCustomer",{ids:a.subjectIdarray,authflag:e},function(e){a.dialogVisible=!1,t.$message({message:"成功",type:"success"}),a.loadData()},function(e){a.$message.error(e.repMsg)})},search:function(){this.loadData()},reset:function(){this.reqParams.name="",this.reqParams.phone="",this.reqParams.subject="",this.subjectCodeSearch="",this.reqParams.id="",this.reqParams.examineId="",this.customerType="",this.customerTypeSearch="",this.loadData()},remoteMethods:function(e){var t=this,a=this;""!==e?(this.loading=!0,setTimeout(function(){a.$api.post("crm/anjiDealer/getList",{code:a.subjectCodeSearch,customerCode:a.subjectCodeSearch,customerId:a.reqParams.subject,name:e,pageNum:1,pageRows:10},function(e){e.repData.list.length>0?a.options5=e.repData.list:a.options5=[],t.loading=!1},function(e){a.$message.error("请求出错")})},200)):a.newOptions=[]},remoteMethod:function(e){var t=this,a=this;""!=a.form.addSubject||1!=a.plus?""!==e?(this.loading=!0,setTimeout(function(){a.$api.post("crm/anjiDealer/getList",{code:a.subjectCode,customerCode:a.subjectCode,customerId:a.form.addSubject,name:e,pageNum:1,pageRows:10},function(e){e.repData.list.length>0?a.newOptions=e.repData.list:a.newOptions=[],t.loading=!1},function(e){a.$message.error("请求出错")})},200)):a.newOptions=[]:this.$message.warning("请选择所属主体")},handleSelectionChange:function(e){this.list=e,console.log(this.list)},toggleSelection:function(e){var t=this,a=[];a.push(e),a?a.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},loadData:function(){var e=this,t=this,a={pageNum:t.clickPageNum,pageRows:t.clickPagerows,custtype:t.customerTypeSearch,custname:t.reqParams.name,linktel:t.reqParams.phone,brandCode:t.subjectCodeSearch,dealerid:t.reqParams.id,authflag:parseInt(t.reqParams.examineId)};t.$api.post("crm/customer/getAllCustomer",a,function(a){null!=a.repData?(t.tableData=a.repData.list,t.total=a.repData.total):e.$message.error("数据加载失败，请刷新页面再试")},function(e){console.log(e)})},subjectData:function(){var e=this;e.$api.post("crm/anjiCustomer/queryList",{},function(t){e.optionsMain=t.repData.list,e.optionsMainSearch=t.repData.list},function(e){console.log(e)})},handleSizeChange:function(e){this.clickPagerows=e,this.loadData()},handleCurrentChange:function(e){this.clickPageNum=e,this.loadData()},add:function(){this.savetype="add",this.disable=!1,this.title="新建",this.plus=!0,this.form.name="",this.form.phone="",this.form.addSubject="",this.customerType="",this.form.newDealer=[],this.newOptions=[],this.form.WhetherSignOrNot=""},edit:function(){var e=this;if(e.disable=!1,e.form.name="",e.form.WhetherSignOrNot="",e.form.phone="",e.form.addSubject="",e.customerType="",e.form.newDealer=[],e.newOptions=[],e.setupDealer=[],e.title="编辑",e.savetype="edit",1==e.list.length){e.customerType=e.list[0].custtype,e.form.name=e.list[0].custname,e.form.phone=e.list[0].linktel,e.subjectCode=e.list[0].brandCode,3==e.customerType&&(e.shouOrHied=!0),0==e.list[0].canReceive&&(e.shouOrHied=!1),1==e.list[0].canReceive&&(e.shouOrHied=!0),e.form.WhetherSignOrNot=e.list[0].canReceive;var t=!0,a=!1,s=void 0;try{for(var i,o=r()(e.optionsMain);!(t=(i=o.next()).done);t=!0){var l=i.value;e.list[0].brandCode==l.code&&(e.form.addSubject=l.id)}}catch(e){a=!0,s=e}finally{try{!t&&o.return&&o.return()}finally{if(a)throw s}}e.editId=e.list[0].id,e.plus=!0,e.$api.post("crm/customer/getByPrimaryKey",{id:e.list[0].id},function(t){for(var a=0;a<t.repData.crmAuthList.length;a++)e.form.newDealer.push(t.repData.crmAuthList[a].idCode);e.newOptions=t.repData.crmAuthList,console.log(e.setupDealer)},function(e){})}else e.$message.warning("请勾选单条数据")},chose:function(){},confirm:function(){var e=this,t=this,a={custname:t.form.name,linktel:t.form.phone,brandCode:t.subjectCode,dealerIdCodes:t.form.newDealer,custtype:t.customerType,canReceive:t.form.WhetherSignOrNot,id:t.editId};t.form.newDealer.length;""==t.form.name||""==t.form.phone||""==t.customerType||0==t.trueOrfalse&&""==t.form.addSubject||0==t.trueOrfalses&&0==t.form.newDealer.length?t.$message.warning("请完善信息"):t.$api.post("add"==t.savetype?"crm/customer/insertCustomer":"crm/customer/updateCustomer",a,function(a){t.plus=!1,t.loadData(),e.$message({message:"add"==t.savetype?"新增成功":"编辑成功",type:"success"})},function(e){t.$message.error("请求出错")})}},created:function(){this.loadData(),this.subjectData(),this.userId=this.$api.sGetObject("_user").userId,this.customerTypeSele()}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-box v-box"},[a("div",{staticClass:"headDiv"},[a("div",{staticClass:"headerTop"},[a("div",{staticClass:"headerLeft"},[a("span",{staticClass:"system"},[e._v("账户名")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入账户名",clearable:""},model:{value:e.reqParams.name,callback:function(t){e.$set(e.reqParams,"name",t)},expression:"reqParams.name"}})],1),e._v(" "),a("div",{staticClass:"headerLeft"},[a("span",{staticClass:"system"},[e._v("手机号")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入手机号",clearable:""},model:{value:e.reqParams.phone,callback:function(t){e.$set(e.reqParams,"phone",t)},expression:"reqParams.phone"}})],1),e._v(" "),a("div",{staticClass:"headerLeft"},[a("span",{staticClass:"system"},[e._v("客户类别")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.customerTypeSearch},model:{value:e.customerTypeSearch,callback:function(t){e.customerTypeSearch=t},expression:"customerTypeSearch"}},e._l(e.customerList,function(e){return a("el-option",{key:e.custType,attrs:{label:e.custName,value:e.custType}})}))],1),e._v(" "),a("div",{staticClass:"headerLeft"},[a("span",{staticClass:"system"},[e._v("所属主体")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.selctMainSearch},model:{value:e.reqParams.subject,callback:function(t){e.$set(e.reqParams,"subject",t)},expression:"reqParams.subject"}},e._l(e.optionsMainSearch,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("div",{staticClass:"headerLeft"},[a("span",{staticClass:"system"},[e._v("经销商")]),e._v(" "),a("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入任务名称","remote-method":e.remoteMethods,loading:e.loading,clearable:""},model:{value:e.reqParams.id,callback:function(t){e.$set(e.reqParams,"id",t)},expression:"reqParams.id"}},e._l(e.options5,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("div",{staticClass:"headerLeft"},[a("span",{staticClass:"system"},[e._v("审核状态")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.reqParams.examineId,callback:function(t){e.$set(e.reqParams,"examineId",t)},expression:"reqParams.examineId"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)]),e._v(" "),a("div",{staticClass:"headerRight"},[a("div",{staticClass:"searchAndrest"},[a("SolidButton",{attrs:{type:"solid",text:"查询"},on:{click:e.search}}),e._v(" "),a("SolidButton",{attrs:{type:"hollow",text:"重置"},on:{click:e.reset}})],1)]),e._v(" "),a("div",{staticClass:"clearfix",staticStyle:{"padding-top":"20px",height:"auto"}},[a("Button",{attrs:{type:e.adds.type,icon:e.adds.icon,text:e.adds.text},on:{click:e.add}}),e._v(" "),a("Button",{attrs:{type:e.edits.type,icon:e.edits.icon,text:e.edits.text},on:{click:e.edit}}),e._v(" "),a("Button",{attrs:{type:e.out.type,icon:e.out.icon,text:e.out.text},on:{click:e.toExamine}})],1)]),e._v(" "),a("div",{staticClass:"flexTable"},[a("div",{staticClass:"d-box v-box"},[a("div",{staticClass:"flexTable spaceTable"},[a("div",{staticClass:"tableDiv"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:"",data:e.tableData,"tooltip-effect":"dark",height:"100%"},on:{"selection-change":e.handleSelectionChange,"row-click":e.toggleSelection}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"custname",label:"账户名",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"linktel",label:"手机号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"custtype",label:"客户类别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"==t.row.custtype?a("span",[e._v("安吉物流")]):e._e(),e._v(" "),"2"==t.row.custtype?a("span",[e._v("主机厂")]):e._e(),e._v(" "),"3"==t.row.custtype?a("span",[e._v("经销商")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"brandName",label:"所属主体",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"经销商",align:"center",formatter:e.distributor}}),e._v(" "),a("el-table-column",{attrs:{prop:"authflag",label:"审核状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"==t.row.authflag?a("span",[e._v("申请待审核")]):e._e(),e._v(" "),"1"==t.row.authflag?a("span",[e._v("审核通过")]):e._e(),e._v(" "),"2"==t.row.authflag?a("span",[e._v("审核不通过")]):e._e()]}}])})],1)],1)]),e._v(" "),a("div",{staticClass:"footerDiv"},[a("el-pagination",{staticStyle:{"text-align":"center",padding:"6px 0px"},attrs:{"current-page":e.currentPage4,"page-size":10,layout:"total,sizes, prev,pager, next,jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage4=t}}})],1)])]),e._v(" "),a("el-dialog",{attrs:{title:e.title,center:"",visible:e.plus,width:"640px"},on:{"update:visible":function(t){e.plus=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"账户名","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入账户名","auto-complete":"off",disabled:e.disable},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入手机号","auto-complete":"off",disabled:e.disable},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"客户类别","label-width":e.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择",disabled:e.disable},on:{change:e.customerTypeSelect},model:{value:e.customerType,callback:function(t){e.customerType=t},expression:"customerType"}},e._l(e.customerList,function(e){return a("el-option",{key:e.custType,attrs:{label:e.custName,value:e.custType}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"所属主体","label-width":e.formLabelWidth}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择",disabled:e.trueOrfalse},on:{change:e.selctMain},model:{value:e.form.addSubject,callback:function(t){e.$set(e.form,"addSubject",t)},expression:"form.addSubject"}},e._l(e.optionsMain,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.shouOrHied,expression:"shouOrHied"}],attrs:{label:"是否签收","label-width":e.formLabelWidth,id:"nihao"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.WhetherSignOrNot,callback:function(t){e.$set(e.form,"WhetherSignOrNot",t)},expression:"form.WhetherSignOrNot"}},e._l(e.WhetherSignOrNotList,function(e){return a("el-option",{key:e.custType,attrs:{label:e.custName,value:e.custType}})}))],1),e._v(" "),a("el-form-item",{staticClass:"dealerChoice",attrs:{id:"dealerChoice",label:"经销商","label-width":e.formLabelWidth}},[a("el-select",{staticClass:"dealerChoiceselct",attrs:{disabled:e.trueOrfalses,multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入经销商名称","remote-method":e.remoteMethod,loading:e.loading,clearable:""},model:{value:e.form.newDealer,callback:function(t){e.$set(e.form,"newDealer",t)},expression:"form.newDealer"}},e._l(e.newOptions,function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.idCode}})}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("SolidButton",{attrs:{type:"solid",text:"确定"},on:{click:e.confirm}}),e._v(" "),a("SolidButton",{attrs:{type:"hollow",text:"取消"},on:{click:function(t){e.plus=!1}}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"审核状态",center:"",visible:e.dialogVisible,width:"360px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"submitStyle",attrs:{type:"primary"},on:{click:e.reviewPass}},[e._v("审核通过")]),e._v(" "),a("el-button",{staticClass:"cancelStyle",on:{click:e.noReviewPass}},[e._v("审核不通过")])],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(l,n,!1,function(e){a("wOVS")},"data-v-ed57e302",null);t.default=c.exports},fxRn:function(e,t,a){a("+tPU"),a("zQR9"),e.exports=a("g8Ux")},g8Ux:function(e,t,a){var s=a("77Pl"),r=a("3fs2");e.exports=a("FeBl").getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return s(t.call(e))}},wOVS:function(e,t){}});
//# sourceMappingURL=2.a33e183769241c9394f4.js.map