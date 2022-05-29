const express = require('express')
const router = express.Router()
const setuser_handler = require('../router_handle/setuserinfo')
const fileUpload=require('../units/upload')
//引入验证码的包
const {
reg_updateuserinfo_schema,
reg_updatepassword_schema
} = require('../schema/user');
const expressjoi = require('@escook/express-joi')
router.get('/getuserinfo',setuser_handler.getUserInfo)
router.post('/updateinfo',setuser_handler.updateInfo)
router.post('/updateuseravatar',fileUpload.single('avatarurl'),setuser_handler.updateUserAvatar)
router.post('/updatepassword',expressjoi(reg_updatepassword_schema),setuser_handler.updatePassword)
module.exports=router