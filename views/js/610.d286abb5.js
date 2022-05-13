"use strict";(self["webpackChunkwxcli"]=self["webpackChunkwxcli"]||[]).push([[610],{6610:function(e,s,t){t.r(s),t.d(s,{default:function(){return l}});var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"register"},[t("div",{staticClass:"top"},[t("router-link",{staticClass:"topspan1",attrs:{to:"/welcome"}},[e._v(" <<返回 ")]),t("router-link",{staticClass:"topspan2",attrs:{to:"/login"}},[e._v("登录>>")])],1),t("div",{staticClass:"center"},[t("h1",[e._v("Register")]),e._m(0),t("div",{staticClass:"phone"},[t("van-icon",{staticClass:"icon",attrs:{name:"manager",color:"#700BEF",size:"30"}}),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.phone_id,expression:"phone_id",modifiers:{number:!0}}],class:{outline:0==e.check.checkPhone()},attrs:{type:"tel",placeholder:"手机号"},domProps:{value:e.phone_id},on:{input:function(s){s.target.composing||(e.phone_id=e._n(s.target.value))},blur:function(s){return e.$forceUpdate()}}})],1),t("div",{staticClass:"code"},[t("van-icon",{staticClass:"icon",attrs:{name:"comment",color:"#700BEF",size:"30"}}),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.code,expression:"code",modifiers:{number:!0}}],class:{outline:e.code.length<6},attrs:{type:"number",name:"",placeholder:"验证码",max:"6"},domProps:{value:e.code},on:{input:function(s){s.target.composing||(e.code=e._n(s.target.value))},blur:function(s){return e.$forceUpdate()}}}),0==e.timer&&e.check.checkPhone()?t("van-button",{staticClass:"getcode",attrs:{type:"info",size:"30"},on:{click:e.getcode}},[e._v("获取验证码 ")]):0!=e.timer||e.check.checkPhone()?t("van-button",{staticClass:"getcode",attrs:{disabled:""}},[e._v(e._s(e.timer)+"秒后重发")]):t("van-button",{staticClass:"getcode",attrs:{type:"info",disabled:""},on:{click:e.getcode}},[e._v(" 获取验证码")])],1),t("div",{staticClass:"password"},[t("van-icon",{staticClass:"icon",attrs:{name:"lock",color:"#700BEF",size:"30"}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{outline:0==e.check.checkPassword()},attrs:{type:"password",name:"",placeholder:"密码"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})],1),t("div",{staticClass:"password"},[t("van-icon",{staticClass:"icon",attrs:{name:"lock",color:"#700BEF",size:"30"}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.repassword,expression:"repassword"}],class:{outline:0==e.check.checkRePassword()},attrs:{type:"password",name:"",placeholder:"再次输入"},domProps:{value:e.repassword},on:{input:function(s){s.target.composing||(e.repassword=s.target.value)}}})],1)]),t("div",{staticClass:"bottom"},[t("van-button",{directives:[{name:"show",rawName:"v-show",value:e.registerShow,expression:"registerShow"}],staticClass:"button1",attrs:{round:"",type:"info"},on:{click:e.userRegister}},[e._v("注册")]),t("van-button",{directives:[{name:"show",rawName:"v-show",value:!e.registerShow,expression:"!registerShow"}],staticClass:"button1",attrs:{round:"",disabled:"",color:"#6f0bef"},on:{click:e.userRegister}},[e._v("注册 ")])],1)])},r=[function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"registersvg"},[o("img",{attrs:{src:t(558),alt:""}})])}],i=t(3444),a=t(4665),c={name:"Register",data(){return{phone_id:"",code:"",password:"",repassword:"",timer:0,tipsMsg:""}},methods:{async getcode(){try{await this.$store.dispatch("user/getCode",{phone_id:this.phone_id}),this.timer=60;var e=setInterval((()=>{this.timer--,0==this.timer&&clearInterval(e)}),1e3)}catch(s){this.$dialog.alert({message:s}).then((()=>{this.tipsMsg=""}))}},async userRegister(){if(this.check.checkCode(this.phonecode))try{const{phone_id:e,password:s}=this;let t=await this.$store.dispatch("user/Register",{phone_id:e,password:s});this.$dialog.alert({message:t}).then((()=>{this.$store.commit("user/GETCODE",""),this.$router.push({name:"login"})}))}catch(e){this.$dialog.alert({message:e}).then((()=>{this.tipsMsg="",this.code=""}))}else this.check.checkCode(this.phonecode)?this.$dialog.alert({message:"请先获取验证码"}).then((()=>{this.code=""})):this.$dialog.alert({message:"验证码错误"}).then((()=>{this.code=""}))}},computed:{check(){return new i.Z({phone:this.phone_id,code:this.code,password:this.password,repassword:this.repassword})},registerShow(){return!!(""!=this.code&&this.check.checkPhone()&&this.check.checkPassword()&&this.check.checkRePassword())},...(0,a.rn)("user",["phonecode"])}},n=c,d=t(1001),h=(0,d.Z)(n,o,r,!1,null,"4bd51187",null),l=h.exports},3444:function(e,s,t){function o(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}t.d(s,{Z:function(){return r}});class r{constructor({phone:e,code:s,password:t,repassword:r}){o(this,"checkPhone",(function(){if(!this.phone)return 0;let e=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|16[0|1|2|3|4|5|6|7|8|9]|17[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|4|5|6|7|8|9])\d{8}$/;return!!e.test(this.phone)})),o(this,"checkCode",(function(e){return this.code?this.code==e:0})),o(this,"checkPassword",(function(){if(!this.password)return 0;const e=/^[a-zA-Z]\S{6,12}$/;return!!e.test(this.password)})),o(this,"checkRePassword",(function(){return this.checkPassword()?this.password==this.repassword:0})),this.phone=e,this.code=s,this.password=t,this.repassword=r}checkAll(e){let s=[this.checkCode(e),this.checkRePassword(),this.checkPassword(),this.checkPhone()];return s=s.filter((e=>0!=e)),s.every((e=>1==e))}}},558:function(e,s,t){e.exports=t.p+"img/svg2.7fddacc4.svg"}}]);