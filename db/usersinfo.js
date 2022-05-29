require('./mongooseServer')
const mongoose = require('mongoose')
const moment = require('moment');
moment.locale();
var Schema = mongoose.Schema;
const stuSchema = new Schema({
    phone_id: {
        type: String,
        //唯一值
        unique: true,
        required: () => {
            return this.length != 0
        },
        //去除空格
        trim: true,
        match: /^(13[0-9]|14[5|7]|19[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|16[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|5|6|7|8|9])\d{8}$/
    },
    ustatus: {
        type: Number,
        min: 0,
        max: 1,
        default: 0
    },
    password: {
        type: String,
        trim: true,
          
    },
    Introduction: String,
    nickname: {
        type: String,
        // 默认值
        default: 'sg219'
    },
    gender: {
        // 类型
        type: String,
        // 默认值
        default: '男'
    },
    address: {
        type: String,
        default: '河南省/商丘市/梁园区',
        trim: true,
    },
    avatarurl: {
        type: String,
        default: 'http://101.43.12.130:3000/uploads/avatarurl/default.jpg'
    },
    uwantlist: {
        type: Array,
        default: []
    },

    birthday: {
        type: String,
        default: moment().format("YYYY-MM-DD")
    },
    udate: {
        type: String,
        default: moment().format("YYYY-MM-DD hh:mm:ss")
    },
    addresslist:{
        type:Array,
        default:[]
    }
})
var userModel = mongoose.model('users', stuSchema)
module.exports = userModel