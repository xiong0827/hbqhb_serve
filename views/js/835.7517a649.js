"use strict";(self["webpackChunkwxcli"]=self["webpackChunkwxcli"]||[]).push([[835],{1835:function(t,r,s){s.r(r),s.d(r,{default:function(){return l}});var e=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"order"},[s("div",{staticClass:"top"},[t._m(0),s("van-icon",{staticClass:"back",attrs:{name:"arrow-left",color:"black",size:"30"},on:{click:function(r){return t.$router.go(-1)}}}),s("div",{staticClass:"deal"},[t._v("交易详情")])],1),s("div",{staticClass:"bottom"},[s("div",{staticClass:"commodity"},[s("div",{staticClass:"a"},[s("li",[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.goodsinfo.gphoto,expression:"goodsinfo.gphoto"}],attrs:{alt:""},on:{click:function(r){return t.$router.push({name:"goodsinfo",query:{goods_id:t.goodsinfo.goods_id}})}}})]),s("li",[t._v(t._s(t.goodsinfo.title))]),s("li",[t._v("￥"+t._s(t.goodsinfo.gprice))])]),s("div",{staticClass:"b"},[s("li",[s("span",[t._v("商品总价")]),s("span",[t._v("￥"+t._s(t.goodsinfo.gprice))])]),t._m(1),s("li",[s("span",[t._v("实收款")]),s("span",[t._v("￥"+t._s(t.goodsinfo.gprice))])])])]),s("div",{staticClass:"location"},[s("li",[s("span",[t._v("收货地址")]),s("span",{on:{click:function(r){return t.$router.push({name:"address"})}}},[s("van-icon",{attrs:{name:"records",color:"blue",size:"24"}})],1)]),s("li",[t._v(t._s(t.buserinfo.nickname)+" "+t._s(t.buserinfo.phone_id))]),s("li",[t._v("河南省商丘市梁园区平安街道睢阳大道中段236号商丘工学院")])]),s("div",{staticClass:"card"},[t._m(2),s("div",{staticClass:"container"},[s("li",[t._v("买家昵称:"+t._s(t.buserinfo.nickname))]),s("li",[s("span",[t._v("订单编号:"+t._s(t.orderInfo.order_id))]),s("span",{on:{click:function(r){return t.copy(t.orderInfo.order_id)}}},[s("button",[t._v("复制")])])]),s("li",[t._v("宝贝快照:发生交易争议时，可作为判断依据")]),s("li",[t._v("交易时间:"+t._s(t.orderInfo.ordertime))])])])]),s("div",{staticClass:"last"},[s("button",[t._v("联系卖家")]),s("button",{on:{click:t.topay}},[t._v(t._s(t.orderStatus))])]),t.errorshow?s("van-empty",{attrs:{image:"error",description:"商品不见了"}}):t._e()],1)},o=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("a",{staticClass:"a",attrs:{href:"#"}},[s("li"),s("li"),s("li")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("li",[s("span",[t._v("运费")]),s("span",[t._v("￥0.00")])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"title"},[s("li",[t._v("订单信息")]),s("li",[s("button",[t._v("联系买家")])])])}],i=s(4665),n={data(){return{errorshow:!1}},mounted(){this.getOrderInfo()},methods:{async getOrderInfo(){try{await this.$store.dispatch("order/getOrderInfo",this.$route.query.order_id)}catch(t){this.$dialog.alert({message:t}).then(this.errorshow=!0)}},copy(t){document.execCommand("copy",!1,t)},async topay(){if(1==this.orderInfo.orderstatus){let t=await this.$store.dispatch("order/updateOrder",this.orderInfo.order_id);this.$dialog.alert({message:t}).then((()=>{this.getOrderInfo()}))}}},computed:{...(0,i.rn)("order",["orderInfo"]),buserinfo(){return this.orderInfo.buserinfo||{}},goodsinfo(){return this.orderInfo.goodsinfo||{}},orderStatus(){switch(this.orderInfo.orderstatus){case 1:return"去支付";case 2:return"已支付";case 3:return"已取消";default:return"已支付"}}}},a=n,c=s(3736),d=(0,c.Z)(a,e,o,!1,null,"b87004b8",null),l=d.exports}}]);