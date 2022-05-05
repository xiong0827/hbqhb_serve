const express = require('express')
const router = express.Router()
const user_handler = require('../router_handle/userinfo')

//引入验证码的包
const {
reg_userinfo_schema,
reg_phonecode_schema,
reg_login_schema
} = require('../schema/user')
//1导入验证数据的中间件
const expressjoi = require('@escook/express-joi')
//注册
router.post('/register',expressjoi(reg_userinfo_schema),user_handler.registerUser)
//获取手机号
router.post('/getcode',expressjoi(reg_phonecode_schema),user_handler.getcode)
//登录
router.post('/loginuser',expressjoi(reg_login_schema),user_handler.loginUser)

module.exports=router