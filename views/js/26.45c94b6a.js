"use strict";(self["webpackChunkwxcli"]=self["webpackChunkwxcli"]||[]).push([[26],{1026:function(t,s,o){o.r(s),o.d(s,{default:function(){return u}});var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"orderGoods"},[o("van-nav-bar",{attrs:{"left-arrow":"",title:"购买宝贝"},on:{"click-left":t.onClickLeft}}),o("div",{staticClass:"buyOrder"},[o("div",{staticClass:"buyOrderInfo"},[o("h3",[t._v(t._s(t.goodsinfo.title))]),o("b",[t._v("RMB "+t._s(t.goodsinfo.gprice))]),o("div",{staticClass:"stepper1"},[o("van-stepper",{attrs:{theme:"round","button-size":"22","disable-input":"","disable-plus":""},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}}),o("div",{staticClass:"note"},[t._v("Note")]),o("div",{staticClass:"collect"},[o("van-icon",{attrs:{name:"like-o",size:"18px",color:"#eee"}})],1)],1)]),o("div",{staticClass:"buyOrderImg"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.goodsphoto[0],expression:"goodsphoto[0]"}],attrs:{alt:""}})])]),o("div",{staticClass:"buyBottom"},[t._m(0),o("div",{staticClass:"bottom"},[o("div",{staticClass:"puy"},[t._m(1),o("h3",[t._v("rmb "+t._s(t.goodsinfo.gprice))])]),o("div",{staticClass:"button"},[o("van-button",{staticClass:"btn",attrs:{round:"",type:"info",color:"ff6e53"},on:{click:t.gosubmit}},[t._v("提交订单")])],1)])])],1)},i=[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"bottomTop"},[o("h4",[t._v("Popular dishes from this resto")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"puyImg"},[e("img",{attrs:{src:o(2047),alt:"",width:"40px",height:"40px"}}),e("b",[t._v("·应用付款")])])}],a=(o(9814),o(1404)),r=o(4665),n={name:"OrderGoods",data(){return{value:1}},mounted(){this.getgoodsinfo()},methods:{onClickLeft(){this.$router.go(-1)},async getgoodsinfo(){try{await this.$store.dispatch("goods/getGoodsInfo",this.$route.query.goods_id)}catch(t){this.goodsIsShow=!1}},gosubmit(){a.Z.confirm({title:"提示",message:"是否生成订单并前往提交页？",confirmButtonText:"确认",cancelButtonText:"取消"}).then((async()=>{try{let t=await this.$store.dispatch("order/createOrder",this.goodsinfo.goods_id);this.$router.push({name:"orderinfo",query:{order_id:t.order_id}})}catch(t){return this.$dialog.alert({message:t}).then((()=>{}))}})).catch((()=>{}))}},computed:{...(0,r.rn)("goods",["goodsinfo"]),goodsphoto(){return this.goodsinfo.goodsphoto||[]}}},d=n,c=o(3736),l=(0,c.Z)(d,e,i,!1,null,"67fd291e",null),u=l.exports},2047:function(t,s,o){t.exports=o.p+"img/付钱.deb54b3b.svg"}}]);