const express = require('express')
const router = express.Router()
const fileUpload=require('../units/upload')
const goods_handle = require('../router_handle/goodsinfo')
//引入验证码的包
const {
   reg_insertgoods_schema,
   reg_showgoods_schema,
   reg_goodsid_schema
} = require('../schema/goods')
//1导入验证数据的中间件
const expressjoi = require('@escook/express-joi')
//添加商品
router.post('/issuegoods', fileUpload.array('photo'),expressjoi(reg_insertgoods_schema),goods_handle.issueGoods)
//获取分类
router.get('/getclass',goods_handle.getclassList)
//获取商品列表
router.get('/getgoodslist',expressjoi(reg_showgoods_schema),goods_handle.getgoodsLits)
//获取个人发布的商品列表
router.get('/getmaingoodslist',goods_handle.getMainGoodsList)
//点赞商品
router.get('/getuserlike',expressjoi(reg_goodsid_schema),goods_handle.getUserLike)
//获取商品详情
router.get('/getgoodsinfo',expressjoi(reg_goodsid_schema),goods_handle.getGoodsInfo)
//收藏商品
router.post('/addwantlist',expressjoi(reg_goodsid_schema),goods_handle.addWantList)
//商品留言
router.post('/replygoods',expressjoi(reg_goodsid_schema),goods_handle.replyGoods)
module.exports = router