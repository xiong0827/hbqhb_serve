const orderModel = require('../db/order')
const goodsModel = require('../db/goodsinfo')
const {
    v4: uuidv4
} = require('uuid');
const jwt = require('jsonwebtoken');
const req = require('express/lib/request');
//生成订单
exports.createOrder = (req, res) => {
    //定义uuid
    let uuid = uuidv4()
    //获取购买人信息
    let iusertoken = jwt.decode(req.headers.authorization.slice(7));
    goodsModel.findOne({
        goods_id: req.query.goods_id
    }, {}, (err, docs) => {
        if (!err) {
            if (docs.gstatus) {
                orderModel.create({
                    order_id: uuid,
                    goodsinfo: {
                        goods_id: docs.goods_id,
                        details: docs.details,
                        gprice: docs.gprice,
                        title: docs.title,
                    },
                    issueper: docs.issueper,
                    buserinfo: iusertoken,
                }, (err, doc) => {
                    if (!err) {
                        docs.gstatus = 0
                        docs.save((err) => {
                            if (err) {
                                res.cc('修改商品状态失败' + err, 302)
                            }
                        })
                        res.send({
                            status: 200,
                            message: '生成订单成功',
                            doc
                        })
                    } else {
                        res.cc('生成订单错误', 301)
                    }
                })
            } else if (docs.gstatus == 0) {
                res.cc('切勿重复生成订单', 302)
            } else {
                res.cc('生成订单错误', 301)
            }
        } else {
            res.cc('生成订单异常' + err, 300)
        }
    })
}
//获取个人订单列表
exports.getMainOrder = (req, res) => {
    let iusertoken = jwt.decode(req.headers.authorization.slice(7));
    orderModel.find({
        buserinfo: iusertoken
    }, {}, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send({
                    status: 200,
                    message: '获取个人订单成功',
                    orderList: docs
                })
            }
        } else {
            res.cc('获取个人订单失败', 302)
        }
    })
}
//支付后订单状态 //提交订单
exports.updateOrder = (req, res) => {
    const order_id = req.query.order_id
    orderModel.findOne({
        order_id
    }, {}, (err, docs) => {
        if (err) {
            res.cc('获取订单失败' + null, 301)
        } else if (docs) {
            docs.orderstatus = 1
            docs.save((err) => {
                if (err) {
                    res.cc('修改订单状态失败' + err, 301)
                } else {
                    res.send({
                        status: 200,
                        message: '提交订单成功',
                        orderstatus: docs.orderstatus
                    })
                }
            })
        } else {
            res.cc('获取订单失败', 302)
        }
    })
}
//取消订单
exports.cancelOrder = (req, res) => {
    const order_id = req.query.order_id
    orderModel.findOne({
        order_id
    }, {}, (err, docs) => {
        if (err) {
            res.cc('获取订单失败' + null, 301)
        } else if (docs) {
            
            docs.orderstatus = -1
            docs.save((err) => {
                if (err) {
                    res.cc('取消订单失败' + err, 301)
                } else {
                    goodsModel.findOne({
                        goods_id: docs.goodsinfo.goods_id,
                    }, {
                        goods_id: 1,
                        gstatus: 1
                    }, (err, doc) => {
                        if (err) {
                            res.cc('取消订单失败' + err, 301)
                        } else if (doc) {
                            doc.gstatus = 1
                            doc.save((err) => {
                                if (err) {
                                    res.cc('取消订单失败' + err, 301)
                                } else {
                                    res.send({
                                        status: 200,
                                        message: '取消订单成功',
                                        orderstatus: docs.orderstatus
                                    })
                                }
                            })
                        }
                    })

                }
            })

        } else {
            res.cc('获取订单失败', 302)
        }
    })
}