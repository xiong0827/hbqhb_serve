"use strict";(self["webpackChunkwxcli"]=self["webpackChunkwxcli"]||[]).push([[121],{6121:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"buyout"},e._l(e.orderList,(function(t){return r("van-card",{directives:[{name:"show",rawName:"v-show",value:t.goodsinfo,expression:"order.goodsinfo"}],key:t.order_id,attrs:{tag:"特价",num:"1",price:t.goodsinfo.gprice||{},title:t.ordertime,thumb:t.goodsinfo.gphoto},scopedSlots:e._u([{key:"tags",fn:function(){return[r("van-tag",{attrs:{plain:"",type:"danger"}},[e._v(e._s(e.orderStatus(t.orderstatus)))]),r("van-cell",{attrs:{value:t.goodsinfo.title}})]},proxy:!0},{key:"footer",fn:function(){return[r("van-button",{attrs:{size:"small",hairline:"",type:"info"},on:{click:function(r){return e.$router.push({name:"orderinfo",query:{order_id:t.order_id}})}}},[e._v(e._s(1==t.orderstatus?"去支付":"查看详情"))]),r("van-button",{attrs:{size:"small",hairline:"",type:"info"},on:{click:function(r){return e.cancelOrder(t.order_id)}}},[e._v("取消订单")]),r("van-button",{attrs:{size:"small",hairline:"",type:"danger"},on:{click:function(r){return e.deleteOrder(t.order_id)}}},[e._v("删除订单")])]},proxy:!0}],null,!0)})})),1)},a=[],i=(r(8508),r(8256)),s=(r(9814),r(1404)),o=r(4665),c={mounted(){this.getMainOrderList()},methods:{async getMainOrderList(){try{await this.$store.dispatch("order/getMainOrder")}catch(e){return this.$dialog.alert({message:e}).then((()=>{}))}},cancelOrder(e){s.Z.confirm({title:"提示",message:"确定要取消吗",confirmButtonText:"确认",cancelButtonText:"取消"}).then((async()=>{try{let t=await this.$store.dispatch("order/cancelOrder",e);this.$dialog.alert({message:t}).then((()=>{this.getMainOrderList()}))}catch(t){this.$dialog.alert({message:t}).then((()=>{}))}})).catch((()=>{(0,i.Z)("取消操作")}))},deleteOrder(e){s.Z.confirm({title:"提示",message:"确定要删除吗",confirmButtonText:"确认",cancelButtonText:"取消"}).then((async()=>{try{let t=await this.$store.dispatch("order/deleteOrder",e);this.$dialog.alert({message:t}).then((()=>{this.getMainOrderList()}))}catch(t){this.$dialog.alert({message:t}).then((()=>{}))}})).catch((()=>{(0,i.Z)("取消操作")}))}},computed:{...(0,o.rn)("order",["orderList"]),orderStatus(){return function(e){switch(e){case 1:e="未支付";break;case 2:e="已支付";break;case 3:e="已取消";break;default:break}return e}}}},d=c,l=r(1001),u=(0,l.Z)(d,n,a,!1,null,"487eb2fb",null),h=u.exports}}]);