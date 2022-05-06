require('./mongooseServer')
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const moment = require('moment');
const orderSchema = new Schema({
order_id:{
    type:String,
    unique: true,
        trim: true,
        match: /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/
},
goodsinfo:{
    type:Object,
    require:()=>this.length>0
}
,
ordertime:{
    type: Date,
    default: moment().format("YYYY-MM-DD hh:mm:ss")
},
orderstatus:{
    type:Number,
    //订单取消
    min: -1,
    //订单完成
    max: 1, 
    default: 0
},
buserinfo:{
    type:Object,
},
orderAddress:{
    type:Object,
    default:{}
},
issueper:{
type:Object,

}
})
var orderModel = mongoose.model('orders', orderSchema)
module.exports = orderModel