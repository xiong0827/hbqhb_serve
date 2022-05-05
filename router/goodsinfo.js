const express = require('express')
const router = express.Router()
const fileUpload=require('../units/upload')
const goods_handle = require('../router_handle/goodsinfo')
//引入验证码的包
const {
   reg_insertgoods_schema
} = require('../schema/goods')
//1导入验证数据的中间件
const expressjoi = require('@escook/express-joi')
router.post('/issuegoods', fileUpload.array('photo'),expressjoi(reg_insertgoods_schema),goods_handle.issueGoods)
router.get('/getclass',goods_handle.getclassList)
router.get('/getgoodslist',goods_handle.getgoodsLits)
router.get('/getmaingoodslist',goods_handle.getMainGoodsList)
module.exports = router