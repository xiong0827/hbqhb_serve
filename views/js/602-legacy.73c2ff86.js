"use strict";(self["webpackChunkwxcli"]=self["webpackChunkwxcli"]||[]).push([[602],{6602:function(s,t,a){a.r(t),a.d(t,{default:function(){return v}});var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"personal"},[a("div",{staticClass:"head"},[a("li",{on:{click:function(t){return s.$router.go(-1)}}},[a("van-icon",{staticClass:"c",attrs:{name:"arrow-left",size:"20"}})],1),a("li",[a("van-icon",{staticClass:"d",attrs:{name:"more-o",size:"20"}})],1)]),a("div",{staticClass:"center"},[a("span",{staticClass:"header"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.userInfo.avatarurl,expression:"userInfo.avatarurl"}],attrs:{alt:""}})]),a("span",{staticClass:"name"},[s._v(s._s(s.userInfo.nickname))])]),s._m(0),a("div",{staticClass:"cube"},[a("div",{staticClass:"follow"},[a("van-icon",{staticClass:"a",attrs:{name:"user-o",size:"30"}}),a("a",{attrs:{href:"#"}},[s._v("关注")])],1),a("div",{staticClass:"massages"},[a("van-icon",{staticClass:"b",attrs:{name:"guide-o",size:"30"}}),a("a",{attrs:{href:"#"}},[s._v("发消息")])],1)]),a("div",{staticClass:"baby"},[s._v("全部宝贝")]),a("div",{staticClass:"bottom"},s._l(s.mainGoodsList,(function(t){return a("span",{key:t._id,on:{click:function(a){return s.$router.push({name:"goodsinfo",query:{goods_id:t.goods_id}})}}},[a("div",{staticClass:"img"},[t.goodsphoto[0]?a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.goodsphoto[0],expression:"goods.goodsphoto[0]"}],attrs:{alt:""}}):s._e()]),a("ul",[a("li",[a("p",[s._v(s._s(t.gdate))])]),a("li",[a("p",[s._v(s._s(t.title))])]),a("li",[a("p",[s._v(s._s(t.gprice))])])])])})),0)])},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"num"},[a("span",{staticClass:"care"},[a("li",[s._v("350")]),a("li",[s._v("关注")])]),a("span",{staticClass:"fan"},[a("li",[s._v("364")]),a("li",[s._v("粉丝")])])])}],o=a(4367),n=(a(18508),a(58256)),r=(a(21703),a(34665)),l={mounted:function(){try{this.$store.dispatch("user/getUserInfo",this.$route.query.phone_id),this.$store.dispatch("goods/getMainGoodsList",this.$route.query.phone_id)}catch(s){(0,n.Z)(Error)}},computed:(0,o.Z)((0,o.Z)({},(0,r.rn)("user",["userInfo"])),(0,r.rn)("goods",["mainGoodsList"]))},c=l,u=a(43736),d=(0,u.Z)(c,e,i,!1,null,"ed207344",null),v=d.exports}}]);