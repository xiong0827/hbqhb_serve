"use strict";(self["webpackChunkwxcli"]=self["webpackChunkwxcli"]||[]).push([[192],{79192:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"releaseGoods"},[n("div",{staticClass:"top"},[n("div",{staticClass:"topLeft",on:{click:function(t){return e.$router.push({name:"add"})}}},[n("router-link",{attrs:{to:""}},[e._v("取消")])],1),n("div",{staticClass:"topRight"},[n("van-button",{staticClass:"topButton btn1",attrs:{round:"",type:"info"}},[e._v("存草稿")]),n("van-button",{staticClass:"topButton btn",attrs:{round:"",type:"info"},on:{click:e.issuegoods}},[e._v("发布")])],1)]),n("div",{staticClass:"title"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{placeholder:"写标题，能吸引更多人"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),n("div",{staticClass:"center"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.details,expression:"details"}],attrs:{placeholder:" 卖家都关心品牌型号、入手渠道、转手原因...."},domProps:{value:e.details},on:{input:function(t){t.target.composing||(e.details=t.target.value)}}}),n("UpLoader",{attrs:{maxnum:"5"},on:{getfile:e.getphoto}})],1),n("div",{staticClass:"footer"},[n("van-field",{staticStyle:{width:"80%"},attrs:{id:"classxuanze",readonly:"",clickable:"",name:"picker",value:e.gclassone,label:"选择分类",placeholder:"点击选择分类"},on:{click:function(t){e.showPicker=!0}}}),n("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker,callback:function(t){e.showPicker=t},expression:"showPicker"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:e.columns},on:{confirm:e.onConfirm,cancel:function(t){e.showPicker=!1}}})],1),n("div",{staticClass:"price"},[n("div",{staticClass:"priceLeft"},[n("van-icon",{attrs:{name:"balance-o",size:"40"}}),n("b",[e._v("价格")])],1),n("div",{staticClass:"priceRight"},[n("van-field",{attrs:{type:"number",name:"pattern",placeholder:"价格为低于入手价更容易卖出",rules:[{pattern:e.pattern,message:"请输入正确内容"}]},model:{value:e.gprice,callback:function(t){e.gprice=e._n(t)},expression:"gprice"}})],1)])],1)])},o=[],s=(n(69814),n(61404)),i=n(16198),r=(n(78975),n(41539),n(54747),n(73210),{name:"ReleaseGoods",data:function(){return{gclassone:"",gprice:0,pattern:/^\d{1,5}$/,title:"",details:"",gphoto:[],columns:["手机数码","女装","男装","运动户外","生活百货","游戏装备","技能服务","学习资料","卡卷交易","服饰配件"],showPicker:!1}},mounted:function(){},methods:{onConfirm:function(e){this.gclassone=e,this.showPicker=!1},getphoto:function(e){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.gphoto=[],e.forEach((function(e){t.gphoto.push(e)}));case 2:case"end":return n.stop()}}),n)})))()},issuegoods:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.getphoto.length>0&&e.title&&e.details&&e.gprice&&e.gclassone)){t.next=13;break}return n=new FormData,n.append("details",e.details.trim()),n.append("title",e.title.trim()),n.append("gclassone",e.gclassone),n.append("gprice",e.gprice),e.gphoto.forEach((function(e){n.append("photo",e.file)})),t.next=9,e.$api.reqIssuegoods(n);case 9:a=t.sent,200==a.status?s.Z.confirm({title:"成功提示",message:"发布新商品成功",confirmButtonText:"查看详情",cancelButtonText:"继续查看"}).then((function(){e.$router.push({name:"goodsinfo",query:{goods_id:a.goods_id}})})).catch((function(){e.gprice=0,e.gclassone=""})):e.$dialog.alert({message:a.message+"发布商品失败"}).then((function(){})),t.next=14;break;case 13:e.$dialog.alert({message:"请填写完整数据"}).then((function(){}));case 14:case"end":return t.stop()}}),t)})))()}}}),c=r,l=n(1001),u=(0,l.Z)(c,a,o,!1,null,"ed9c7be6",null),p=u.exports}}]);