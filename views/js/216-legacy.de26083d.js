"use strict";(self["webpackChunkwxcli"]=self["webpackChunkwxcli"]||[]).push([[216],{41216:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"goodsinfo"},[s("Backtop"),e.goodsinfo&&e.issueper?s("div",{staticClass:"top"},[s("div",{staticClass:"top1"},[s("div",{staticClass:"ava"},[s("img",{attrs:{src:e.issueper.avatarurl,alt:""},on:{click:function(t){return e.$router.push({name:"personal",query:{phone_id:e.issueper.phone_id}})}}}),s("b",[e._v(e._s(e.issueper.nickname))])]),s("div",{staticClass:"follow"},[s("van-button",{staticClass:"btn",attrs:{round:"",type:"info"}},[e._v("+关注")])],1)]),s("div",{staticClass:"center"},[s("div",{staticClass:"price"},[s("b",[e._v("￥"+e._s(e.goodsinfo.gprice))])]),s("div",{staticClass:"goodsname"},[e._v(e._s(e.goodsinfo.title))]),s("div",{staticClass:"goodsinfo1"},[e._v(" "+e._s(e.goodsinfo.details)+" ")]),s("div",{staticClass:"goodssvg"},e._l(e.goodsphoto,(function(e,t){return s("img",{key:t,attrs:{src:e,alt:""}})})),0)])]):e._e(),e.goodsIsShow&&e.seeUserInfo?s("div",{staticClass:"collect"},[s("h4",[e._v("留言")]),s("div",{staticClass:"collectbox1"},[s("img",{attrs:{src:e.seeUserInfo.avatarurl,alt:""}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.replytitle,expression:"replytitle"}],attrs:{type:"text",placeholder:"请留言，询问更多细节"},domProps:{value:e.replytitle},on:{input:function(t){t.target.composing||(e.replytitle=t.target.value)}}})]),e._l(e.replayInfo,(function(t){return s("div",{directives:[{name:"show",rawName:"v-show",value:e.goodsinfo.greply,expression:"goodsinfo.greply"}],key:t.reply_id,staticClass:"collectbox2"},[s("img",{attrs:{src:t.avatarurl,alt:""}}),s("h5",[e._v(e._s(t.nickname))]),s("b",[e._v(e._s(t.replytitle))])])})),e._m(0)],2):e._e(),e.seeUserInfo?s("div",{staticClass:"bottom"},[s("div",{staticClass:"mind",on:{click:e.addlike}},[s("van-icon",{attrs:{name:"like",color:"red",size:"40px"}}),s("b",[e._v(e._s(e.goodsinfo.likes))])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:-1==e.goodsinfo.wantshow,expression:"goodsinfo.wantshow == -1"}],staticClass:"bit",on:{click:e.addwantlist}},[s("van-icon",{attrs:{name:"star-o",size:"40px"}}),s("b",[e._v(e._s(e.goodsinfo.wantlist?e.goodsinfo.wantlist.length:0))])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:-1!=e.goodsinfo.wantshow,expression:"goodsinfo.wantshow != -1"}],staticClass:"bit"},[s("van-icon",{attrs:{name:"star",color:"red",size:"40"},on:{click:e.addwantlist}}),s("b",[e._v(e._s(e.goodsinfo.wantlist?e.goodsinfo.wantlist.length:0))])],1),s("div",{staticClass:"buy"},[s("van-button",{staticClass:"btn",attrs:{round:"",type:"info",size:"50"},on:{click:e.addreply}},[e._v("留言")]),s("van-button",{directives:[{name:"show",rawName:"v-show",value:0!=e.goodsinfo.isbuy,expression:"goodsinfo.isbuy != 0"}],staticClass:"btn",attrs:{round:"",type:"info",size:"50"},on:{click:e.gosubmit}},[e._v("购买")]),s("van-button",{directives:[{name:"show",rawName:"v-show",value:0==e.goodsinfo.isbuy,expression:"goodsinfo.isbuy == 0"}],staticClass:"btn",attrs:{round:"",type:"info",size:"50"}},[e._v("编辑信息")])],1)]):e._e(),e.goodsIsShow?e._e():s("van-empty",{attrs:{image:"error",description:"商品不见了"}})],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"collectbox4"},[s("a",{attrs:{href:"#"}},[e._v("查看全部留言>>")])])}],i=s(16198),r=s(4367),a=(s(73210),s(78975),s(34665)),c={name:"GoodsInfo",data:function(){return{goodsIsShow:!0,replytitle:""}},mounted:function(){var e=this;try{this.getgoodsinfo(),setTimeout((function(){e.getisseinfo(e.goodsinfo.phone_id)}),200)}catch(t){}},computed:(0,r.Z)((0,r.Z)((0,r.Z)({},(0,a.rn)("goods",["goodsinfo"])),(0,a.rn)("user",{issueper:"issueper"})),{},{goodsphoto:function(){return this.goodsinfo.goodsphoto||[]},seeUserInfo:function(){return this.goodsinfo.seeuserinfo||{}},replayInfo:function(){return this.goodsinfo.greply||[]}}),methods:{getgoodsinfo:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("goods/getGoodsInfo",e.$route.query.goods_id);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),e.goodsIsShow=!1;case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},addlike:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("goods/getUserLike",e.goodsinfo.goods_id);case 3:e.getgoodsinfo(),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.$dialog.alert({message:t.t0}).then((function(){}));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},addwantlist:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("goods/addWantList",e.goodsinfo.goods_id);case 3:e.getgoodsinfo(),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.$dialog.alert({message:t.t0}).then((function(){}));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},addreply:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!(e.replytitle.trim().length>0)){t.next=8;break}return t.next=4,e.$store.dispatch("goods/addReply",{goods_id:e.goodsinfo.goods_id,replytitle:e.replytitle});case 4:e.replytitle="",e.getgoodsinfo(),t.next=9;break;case 8:e.$dialog.alert({message:"不允许回复空"}).then((function(){e.replytitle=""}));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),e.$dialog.alert({message:t.t0}).then((function(){e.replytitle=""}));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},getisseinfo:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/getIsserUserInfo",e.goodsinfo.phone_id);case 2:case"end":return t.stop()}}),t)})))()},getseeuserinfo:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/getUserInfo");case 2:case"end":return t.stop()}}),t)})))()},gosubmit:function(){this.$router.push({name:"ordergoods",query:{goods_id:this.goodsinfo.goods_id}})}}},d=c,l=s(1001),u=(0,l.Z)(d,o,n,!1,null,"eafb5b72",null),g=u.exports}}]);