const express = require('express')
const router = express.Router()
const fileUpload=require('../units/upload')
const goods_handle = require('../router_handle/goodsinfo')
//引入验证码的包
const {
    reg_userinfo_schema,
    reg_phonecode_schema,
    reg_login_schema
} = require('../schema/user')
//1导入验证数据的中间件
const expressjoi = require('@escook/express-joi')
router.post('/issuegoods', fileUpload.array('photo'),goods_handle.issueGoods)
module.exports = router