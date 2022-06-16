require('./mongooseServer')
const mongoose = require('mongoose')
const moment = require('moment');
var Schema = mongoose.Schema;
const goodsSchema = new Schema({
    goods_id: {
        type: String,
        unique: true,
        trim: true,
        match: /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/
    },
    gstatus: {
        type: Number,
        min: 0,
        max: 1,
        default: 1
    },
    goodsphoto: {
        type: Array,
        default:[]
    },
    details: {
        type: String,
    },
    title: {
        type: String,
    },
    gclassone: {
        type: String,
    },
    gprice: {
        type: Number,
        min: 0.1,
        max: 99999,

    },
    issueper:{
        type:Object,
        default:[]
    },
    likes:{
        type:Number,
        default:0
    },
    wantlist:{
       type:[],
       default:[]
    },
    phone_id:{
       type:String,
       match:/^(13[0-9]|14[5|7]|19[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|16[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|5|6|7|8|9])\d{8}$/
    },
    gdate: {
        type: String,
        default: moment().format("YYYY-MM-DD")
    },
    greply: {
        type: Array,
        default: []
    }

})
var goodsModel=mongoose.model('goods',goodsSchema)
module.exports = goodsModel