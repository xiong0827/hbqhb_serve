"use strict";(self["webpackChunkwxcli"]=self["webpackChunkwxcli"]||[]).push([[469],{5469:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"maindata"},[e("Backtop"),e("div",{staticClass:"head"},[t._m(0),e("div",{staticClass:"headRight"},[e("van-image",{attrs:{round:"",width:"60px",height:"60px",src:t.userInfo.avatarurl}}),e("UpLoaderOne")],1)]),e("div",{staticClass:"input"},[e("van-cell-group",[e("van-field",{attrs:{label:"昵称",placeholder:t.userInfo.nickname},model:{value:t.nickname,callback:function(a){t.nickname=a},expression:"nickname"}})],1),e("van-cell-group",[e("van-field",{attrs:{readonly:"",clickable:"",name:"picker",value:t.gender,label:"性别",placeholder:t.userInfo.gender},on:{click:function(a){t.showPicker=!0}}}),e("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(a){t.showPicker=a},expression:"showPicker"}},[e("van-picker",{attrs:{"show-toolbar":"",columns:t.columns},on:{confirm:t.onConfirmSex,cancel:function(a){t.showPicker=!1}}})],1)],1),e("van-cell-group",[e("van-cell",{attrs:{title:"生日",placeholder:t.userInfo.birthday},on:{click:function(a){t.show=!0}},model:{value:t.birthday,callback:function(a){t.birthday=a},expression:"birthday"}}),e("van-calendar",{attrs:{"min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.onConfirmDate},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}})],1),e("SelectSite",{attrs:{address:t.userInfo.address}})],1),e("div",{staticClass:"footer"},[e("van-button",{staticClass:"btn",attrs:{round:"",type:"info"},on:{click:t.clearinfo}},[t._v("取消")]),e("van-button",{staticClass:"btn",attrs:{round:"",type:"info"},on:{click:t.setInfo}},[t._v("保存")])],1)],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"headLeft"},[e("b",[t._v("头像")])])}],o=e(4665),r={name:"MainData",mounted(){try{this.$store.dispatch("user/getUserInfo")}catch(t){Toast("获取用户信息失败")}this.$on("updateAddress",(function(t){this.address=t}))},data(){return{show:!1,minDate:new Date(1900,0,1),maxDate:new Date(2006,0,31),tipsMsg:"保存成功",columns:["男","女"],showPicker:!1,birthday:null,nickname:null,address:null,avatarurl:[],gender:null}},methods:{onClickLeft(){Toast("返回")},formatDate(t){return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`},onConfirmDate(t){this.show=!1,this.date=this.formatDate(t)},async getphoto(t){this.avatarurl=[],t.forEach((t=>{this.avatarurl.push(t)}))},clearinfo(){location.reload()},async setInfo(){try{await this.$store.dispatch("user/updateInfo")}catch(t){}},onConfirmSex(t){this.usex=t,this.showPicker=!1}},computed:{...(0,o.rn)("user",["userInfo"])}},i=r,c=e(1001),l=(0,c.Z)(i,n,s,!1,null,"88374a92",null),u=l.exports}}]);