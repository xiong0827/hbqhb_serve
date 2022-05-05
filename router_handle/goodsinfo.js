const {
    v4: uuidv4
} = require('uuid');
const goodsModel = require('../db/goodsinfo')
const gclassModel = require('../db/goodclass')
//解析token
const jwt = require('jsonwebtoken');
const req = require('express/lib/request');
const res = require('express/lib/response');
const {
    count
} = require('../db/goodsinfo');
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
exports.issueGoods = (req, res) => {
    const goodsinfo = req.body
    //截取token
    var goodsphoto = [];
    //处理图片路径
    if (req.files) {

        req.files.forEach(element => {
            let picpath = 'http://101.43.12.130:3000/' + element.path.replace(/\\/g, '/')
            goodsphoto.push(picpath)
        });
    }
    //定义uuid
    let uuid = uuidv4()
    //解析token
    let usertoken = req.headers.authorization.slice(7);
    usertoken = jwt.decode(usertoken)
    usertoken = {
        phone_id: usertoken.phone_id,
        nickname: usertoken.nickname,
        avatarurl: usertoken.avatarurl
    }
    //发布商品
    goodsModel.create({
        goods_id: uuid,
        title: goodsinfo.title,
        details: goodsinfo.details,
        gclassone: goodsinfo.gclassone,
        gprice: goodsinfo.gprice,
        issueper: usertoken,
        phone_id: usertoken.phone_id,
        goodsphoto: goodsphoto
    }, function (err, docs) {
        if (!err) {
            res.cc('添加商品成功', 200, docs)
        } else {
            res.cc(err, 301)
        }
    })
}
//获取商品分类
exports.getclassList = (req, res) => {
    gclassModel.find({}, '-_id', (err, docs) => {
        if (err) {
            res.cc('获取失败', err)
        } else {
            res.send({
                status: 200,
                data: docs
            })
        }
    })
}
//分页分类关键词排序获取商品
exports.getgoodsLits = (req, res) => {
    const paginginfo = req.body

    var showcount = 0
    //判断排序规则
    var goodssort = {}
    //按时间排序
    if (paginginfo.gtimesort) {
        goodssort = {
            gdate: paginginfo.gtimesort
        }
    }
    //按价格排序
    if (paginginfo.gpricesort) {
        goodssort = {
            gprice: paginginfo.gpricesort
        }
    }
    //关键词搜索
    let filters = {}
    //关键词加分类
    if (paginginfo.searchkeyword && paginginfo.gclassone) {
        filters = {
            $and: [{
                    $or: [{
                            title: {
                                $regex: paginginfo.searchkeyword,
                                $options: '$i'
                            }
                        }, {
                            details: {
                                $regex: paginginfo.searchkeyword,
                                $options: '$i'
                            }
                        },
                        {
                            gclassone: {
                                $regex: paginginfo.searchkeyword,
                                $options: '$i'
                            }
                        }
                    ]
                },
                {
                    gstatus: 1
                },
                {
                    gclassone: paginginfo.gclassone
                }
            ]
        }
    }
    //只有关键词
    else if (paginginfo.searchkeyword) {
        filters = {
            $and: [{
                    $or: [{
                            title: {
                                $regex: paginginfo.searchkeyword,
                                $options: '$i'
                            }
                        }, {
                            details: {
                                $regex: paginginfo.searchkeyword,
                                $options: '$i'
                            }
                        },
                        {
                            gclassone: {
                                $regex: paginginfo.searchkeyword,
                                $options: '$i'
                            }
                        }
                    ]
                },
                {
                    $or: [{
                        gstatus: 1
                    }]
                },
            ]
        }
    }
    //只有分类
    else if (paginginfo.gclassone) {
        filters = {
            $and: [{
                    gstatus: 1
                },
                {
                    gclassone: paginginfo.gclassone
                }
            ]
        }
    }
    //啥也没有
    else {
        filters = {
            gstatus: 1
        }
    }
    //收集总共返回的数量

    goodsModel.countDocuments(filters, (err, docs) => {
        if (err) {
            res.cc('查找错误', 201)
        } else {
            if (docs <= 0) {
                res.cc('没有找到该商品', 201)
            } else {
                showcount = docs
                goodsModel.find(filters, '-_id gprice', {
                    skip: (paginginfo.atpage - 1) * (paginginfo.pagenum),
                    limit: paginginfo.pagenum,
                    sort: goodssort
                }, (err, docs) => {
                    if (err) {
                        res.cc('获取商品列表失败')
                    } else {
                        if (docs.length > 0) {
                            res.send({
                                status: 200,
                                message: '获取成功',
                                goodsList: docs,
                                goodscount: showcount
                            })
                        } else {
                            res.send({
                                status: 201,
                                message: '还没有相关商品',
                                goodsList: docs
                            })
                        }
                    }
                })
            }

        }
    })
}
//获取个人发布商品
exports.getMainGoodsList = (req, res) => {
    let usertoken = req.headers.authorization.slice(7);
    const {
        phone_id
    } = jwt.decode(usertoken)
    if (!phone_id) {
        res.cc('清先登录', 301)
    } else {
        goodsModel.find({
            'phone_id': phone_id

        }, function (err, docs) {
            if (err) {
                res.cc('获取个人信息失败')
            } else {
                res.send({
                    status: 200,
                    message: '获取我发布的成功',
                    maingoodlist: docs
                })
            }
        })
    }
}