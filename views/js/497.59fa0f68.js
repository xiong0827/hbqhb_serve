"use strict";(self["webpackChunkwxcli"]=self["webpackChunkwxcli"]||[]).push([[497],{2497:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"releaseGoods"},[s("div",{staticClass:"top"},[s("div",{staticClass:"topLeft",on:{click:function(e){return t.$router.push({name:"add"})}}},[s("router-link",{attrs:{to:""}},[t._v("取消")])],1),s("div",{staticClass:"topRight"},[s("van-button",{staticClass:"topButton btn1",attrs:{round:"",type:"info"}},[t._v("存草稿")]),s("van-button",{staticClass:"topButton btn",attrs:{round:"",type:"info"},on:{click:t.issuegoods}},[t._v("发布")])],1)]),s("div",{staticClass:"title"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{placeholder:"写标题，能吸引更多人"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),s("div",{staticClass:"center"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.details,expression:"details"}],attrs:{placeholder:" 卖家都关心品牌型号、入手渠道、转手原因...."},domProps:{value:t.details},on:{input:function(e){e.target.composing||(t.details=e.target.value)}}}),s("UpLoader",{attrs:{maxnum:"5"},on:{getfile:t.getphoto}})],1),s("div",{staticClass:"footer"},[s("van-field",{staticStyle:{width:"80%"},attrs:{id:"classxuanze",readonly:"",clickable:"",name:"picker",value:t.gclassone,label:"选择分类",placeholder:"点击选择分类"},on:{click:function(e){t.showPicker=!0}}}),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[s("van-picker",{attrs:{"show-toolbar":"",columns:t.columns},on:{confirm:t.onConfirm,cancel:function(e){t.showPicker=!1}}})],1),s("div",{staticClass:"price"},[s("div",{staticClass:"priceLeft"},[s("van-icon",{attrs:{name:"balance-o",size:"40"}}),s("b",[t._v("价格")])],1),s("div",{staticClass:"priceRight"},[s("van-field",{attrs:{type:"number",name:"pattern",placeholder:"价格为低于入手价更容易卖出",rules:[{pattern:t.pattern,message:"请输入正确内容"}]},model:{value:t.gprice,callback:function(e){t.gprice=t._n(e)},expression:"gprice"}})],1)])],1)])},i=[],o=(s(9814),s(1404)),n={name:"ReleaseGoods",data(){return{gclassone:"",gprice:0,pattern:/^\d{1,5}$/,title:"",details:"",gphoto:[],columns:["手机数码","女装","男装","运动户外","生活百货","游戏装备","技能服务","学习资料","卡卷交易","服饰配件"],showPicker:!1}},mounted(){},methods:{onConfirm(t){this.gclassone=t,this.showPicker=!1},async getphoto(t){this.gphoto=[],t.forEach((t=>{this.gphoto.push(t)}))},async issuegoods(){if(this.getphoto.length>0&&this.title&&this.details&&this.gprice&&this.gclassone){let t=new FormData;t.append("details",this.details.trim()),t.append("title",this.title.trim()),t.append("gclassone",this.gclassone),t.append("gprice",this.gprice),this.gphoto.forEach((e=>{t.append("photo",e.file)}));let e=await this.$api.reqIssuegoods(t);200==e.status?o.Z.confirm({title:"成功提示",message:"发布新商品成功",confirmButtonText:"查看详情",cancelButtonText:"继续查看"}).then((()=>{this.$router.push({name:"goodsinfo",query:{goods_id:e.goods_id}})})).catch((()=>{this.gprice=0,this.gclassone=""})):this.$dialog.alert({message:e.message+"发布商品失败"}).then((()=>{}))}else this.$dialog.alert({message:"请填写完整数据"}).then((()=>{}))}}},l=n,r=s(3736),c=(0,r.Z)(l,a,i,!1,null,"ed9c7be6",null),p=c.exports}}]);