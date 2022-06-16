"use strict";(self["webpackChunkwxcli"]=self["webpackChunkwxcli"]||[]).push([[56],{94056:function(s,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"resetPassword"},[t("div",{staticClass:"top"},[t("router-link",{staticClass:"topspan1",attrs:{to:"/main"}},[s._v("<<返回")])],1),t("div",{staticClass:"center"},[t("h1",[s._v("ResetRegister")]),s._m(0),t("div",{staticClass:"password old"},[t("van-icon",{staticClass:"icon",attrs:{name:"lock",color:"#700BEF",size:"30"},on:{click:function(e){return s.showpassword("1")}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:s.oldpassword,expression:"oldpassword"}],ref:"password1",attrs:{type:"password",name:"",placeholder:"原密码"},domProps:{value:s.oldpassword},on:{input:function(e){e.target.composing||(s.oldpassword=e.target.value)}}})],1),t("div",{staticClass:"password new"},[t("van-icon",{staticClass:"icon",attrs:{name:"lock",color:"#700BEF",size:"30"},on:{click:function(e){return s.showpassword("2")}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:s.newpassword,expression:"newpassword"}],ref:"password2",class:{outline:1!=s.check.checkPassword()},attrs:{type:"password",name:"",placeholder:"新密码"},domProps:{value:s.newpassword},on:{input:function(e){e.target.composing||(s.newpassword=e.target.value)}}})],1),t("div",{staticClass:"password repeat"},[t("van-icon",{staticClass:"icon",attrs:{name:"lock",color:"#700BEF",size:"30"},on:{click:function(e){return s.showpassword("3")}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:s.repassword,expression:"repassword"}],ref:"password3",class:{outline:0==s.check.checkRePassword()},attrs:{type:"password",name:"",placeholder:"再次输入密码"},domProps:{value:s.repassword},on:{input:function(e){e.target.composing||(s.repassword=e.target.value)}}})],1)]),t("div",{staticClass:"bottom"},[t("van-button",{staticClass:"button1",attrs:{round:"",type:"info"},on:{click:s.updatepassword}},[s._v("重置密码")])],1)])},a=[function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",{staticClass:"registersvg"},[r("img",{attrs:{src:t(74518),alt:""}})])}],o=t(16198),n=(t(78975),t(74916),t(15306),t(22121)),i={name:"ResetPassword",data:function(){return{oldpassword:"",newpassword:"",repassword:"",code:"",timer:0,tipsMsg:"修改成功"}},methods:{showpassword:function(s){switch(s){case"1":"text"==this.$refs.password1.type?this.$refs.password1.type="password":this.$refs.password1.type="text";break;case"2":"text"==this.$refs.password2.type?this.$refs.password2.type="password":this.$refs.password2.type="text";break;case"3":"text"==this.$refs.password3.type?this.$refs.password3.type="password":this.$refs.password3.type="text";break;default:return}},getcode:function(){var s=this;this.phonenum,this.timer=5;var e=setInterval((function(){s.timer--,0==s.timer&&clearInterval(e)}),1e3)},updatepassword:function(){var s=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s.newpassword!==s.repassword&&s.$dialog.alert({message:"请输入一样的密码"}),e.prev=1,e.next=4,s.$store.dispatch("user/upDatePassword",{oldpassword:s.oldpassword,password:s.newpassword});case 4:t=e.sent,s.$dialog.alert({message:t+"请重新登录"}).then((function(){localStorage.removeItem("token"),s.$router.replace("main"),location.reload()})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),s.$dialog.alert({message:e.t0}).then((function(){s.newpassword="",s.oldpassword="",s.repassword=""}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},computed:{check:function(){return new n.Z({password:this.newpassword,repassword:this.repassword})},isshow:function(){return this.check.checkAll()}}},c=i,d=t(43736),p=(0,d.Z)(c,r,a,!1,null,"132cd47d",null),l=p.exports},22121:function(s,e,t){t.d(e,{Z:function(){return i}});t(21703);function r(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function a(s,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(s,r.key,r)}}function o(s,e,t){return e&&a(s.prototype,e),t&&a(s,t),Object.defineProperty(s,"prototype",{writable:!1}),s}var n=t(23796),i=(t(74916),t(77601),t(41539),function(){function s(e){var t=e.phone,a=e.code,o=e.password,i=e.repassword;r(this,s),(0,n.Z)(this,"checkPhone",(function(){if(!this.phone)return 0;var s=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|16[0|1|2|3|4|5|6|7|8|9]|17[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|4|5|6|7|8|9])\d{8}$/;return!!s.test(this.phone)})),(0,n.Z)(this,"checkCode",(function(s){return this.code?this.code==s:0})),(0,n.Z)(this,"checkPassword",(function(){if(!this.password)return 0;var s=/^[a-zA-Z]\S{6,12}$/;return!!s.test(this.password)})),(0,n.Z)(this,"checkRePassword",(function(){return this.checkPassword()?this.password==this.repassword:0})),this.phone=t,this.code=a,this.password=o,this.repassword=i}return o(s,[{key:"checkAll",value:function(s){var e=[this.checkCode(s),this.checkRePassword(),this.checkPassword(),this.checkPhone()],t=e.every((function(s){return!0===s}));return t}}]),s}())},74518:function(s,e,t){s.exports=t.p+"img/svg2.7fddacc4.svg"}}]);