const express = require('express')
const router = express.Router()
const order_handler = require('../router_handle/order')
const expressjoi = require('@escook/express-joi')
router.post('/createorder',order_handler.createOrder)
router.get('/getmainorder',order_handler.getMainOrder)
router.post('/updateorder',order_handler.updateOrder)
router.post('/cancelOrder',order_handler.cancelOrder)
module.exports=router