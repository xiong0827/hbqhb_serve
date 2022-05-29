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
    type: String,
    default: moment().format('lll')
},
orderstatus:{
    type:Number,
    min: 1,
    max: 4, 
    default: 1
},
bphone_id:{
    type:String,
      required: () => {
            return this.length != 0
        },
        //去除空格
        trim: true,
        match: /^(13[0-9]|14[5|7]|19[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|16[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|5|6|7|8|9])\d{8}$/
},
buserinfo:{
    type:Object,
},
orderAddress:{
    type:Object,
    default:{}
}
})
var orderModel = mongoose.model('orders', orderSchema)
module.exports = orderModel