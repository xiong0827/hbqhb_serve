"use strict";(self["webpackChunkwxcli"]=self["webpackChunkwxcli"]||[]).push([[426],{426:function(t,n,e){e.r(n),e.d(n,{default:function(){return c}});var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"buyout"},t._l(t.mainGoodsList,(function(n){return e("van-card",{key:n._id,attrs:{num:"1",price:n.gprice,title:n.gdate,thumb:n.goodsphoto[0]},on:{click:function(e){return t.$router.push({name:"goodsinfo",query:{goods_id:n.goods_id}})}},scopedSlots:t._u([{key:"tags",fn:function(){return[e("van-cell",{attrs:{value:n.title}}),e("van-cell",{attrs:{value:1==n.gstatus?"发布中":"已卖出"}})]},proxy:!0},{key:"footer",fn:function(){return[e("van-button",{attrs:{size:"small",hairline:"",type:"info"}},[t._v("编辑发布")]),e("van-button",{attrs:{size:"small",hairline:"",type:"danger"}},[t._v("删除发布")])]},proxy:!0}],null,!0)})})),1)},s=[],r=e(4665),a={data(){return{show:!1}},mounted(){this.$store.dispatch("goods/getMainGoodsList")},methods:{},computed:{...(0,r.rn)("goods",["mainGoodsList"])}},i=a,u=e(1001),l=(0,u.Z)(i,o,s,!1,null,"ad0d42c6",null),c=l.exports}}]);