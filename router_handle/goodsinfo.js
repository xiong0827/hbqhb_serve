const {
    v4: uuidv4
} = require('uuid');
const goodsModel = require('../db/goodsinfo')
const gclassModel = require('../db/goodclass')
const userModel = require('../db/usersinfo')
//时间格式化s
const moment = require('moment');
//解析token
const jwt = require('jsonwebtoken');
//给回复分配id
const {
    nanoid
} = require('nanoid')

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
        phone_id: usertoken.phone_id,
        goodsphoto: goodsphoto
    }, function (err, docs) {
        if (!err) {
            res.send({
                status:200,
                message:'发布商品成功',
                goods_id:docs.goods_id
            })
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
                goodsModel.find(filters, ' goods_id gprice gstatus title gclassone details likes wantlist issueper goodsphoto ', {
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
                                goodsList:docs,
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
   let phone_id = req.query.phone_id?req.query.phone_id:jwt.decode(req.headers.authorization.slice(7)).phone_id;
    if (!jwt.decode(req.headers.authorization.slice(7)).phone_id) {
        res.cc('清先登录', 301)
    } else {
        goodsModel.find({
             phone_id
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
//用户点赞
exports.getUserLike = (req, res) => {
    // let usertoken = req.headers.authorization.slice(7);
    // const {
    //     phone_id
    // } = jwt.decode(usertoken)
    let goodsInfo = req.query
    goodsModel.findOne({
        goods_id: goodsInfo.goods_id
    }, {
        likes: 1,
        title: 1
    }).then(docs => {

        if (docs) {
            docs.likes++;
            docs.save((err) => {
                if (err) {
                    res.cc('点赞失败' + err, 301)
                } else {
                    console.log(docs);
                    res.cc('点赞成功', 200)
                }
            })
        } else {
            res.cc('没有找到', 401)
        }
    }).catch(err => {
        if (err) {
            res.cc('点赞失败' + err, 301)
        }
    })
}
//获取商品详情
exports.getGoodsInfo = (req, res) => {
    let goodsinfo = req.query;
    let iusertoken = jwt.decode(req.headers.authorization.slice(7));
    goodsModel.findOne({
        goods_id: goodsinfo.goods_id
    }, function (err, docs) {
        if (err) {
            res.cc('查看详情错误', 301)
        } else if (docs) {

            res.send({
                status: 200,
                message: '获取商品详情成功',
                seeuserinfo:iusertoken,
                tgoodsinfo: docs,
                isbuy: iusertoken.phone_id == docs.phone_id ? 0 : 1,
                //为-1时显示红色
                wantshow: docs.wantlist.findIndex(element => element.phone_id == iusertoken.phone_id)
            })
        } else {
            res.cc(err, 402)
        }
    })
}
// /添加收藏
exports.addWantList = (req, res) => {
    //获取解析token
    let usertoken = jwt.decode(req.headers.authorization.slice(7));
    // 获取商品id
    const goodsifno = req.query
    goodsModel.findOne({
        goods_id: goodsifno.goods_id
    }, (err, docs) => {
        if (err) {
            res.cc('添加收藏出现异常', 402)
        } else if (docs) {
            userModel.findOne({
                phone_id: usertoken.phone_id
            }).then(udocs => {
                if (udocs) {
                    let iswant = udocs.uwantlist.findIndex(element => {
                        return element.goods_id == goodsifno.goods_id
                    })
                    if (iswant == -1) {
                        udocs.uwantlist.push({
                            goods_id: docs.goods_id,
                            gstatus: docs.gstatus,
                            goodsphoto: docs.goodsphoto,
                            gprice: docs.gprice,
                            title:docs.title,
                            issueper: docs.issueper,
                            collectiontime: moment().format("YYYY-MM-DD hh:mm:ss")

                        })
                        udocs.save((err) => {
                            if (err) {
                                res.cc('收藏失败', 300)
                            }
                        })
                    } else {
                        udocs.uwantlist.splice(iswant, 1)
                        udocs.save((err) => {
                            if (err) {
                                res.cc('收藏失败', 300)
                            }
                        })
                    }
                }
            }).catch(err => {
                res.cc(err, 302)
            })
            let iswant = docs.wantlist.findIndex(element => {
                return element.phone_id == usertoken.phone_id
            })
            if (iswant == -1) {
                docs.wantlist.push({
                    phone_id: usertoken.phone_id,
                    nickname: usertoken.nickname,
                    avatarurl: usertoken.avatarurl
                })
                docs.save((err) => {
                    if (!err) {
                        res.send({
                            status: 200,
                            message: '收藏成功',
                            wantstatus: 1
                        })
                    } else {
                        res.cc('保存失败')
                    }
                })
            } else {
                docs.wantlist.splice(iswant, 1)
                docs.save((err) => {
                    if (!err) {
                        res.send({
                            status: 200,
                            message: '取消收藏',
                            wantstatus: 0
                        })
                    }
                })
            }
        } else {
            res.cc('商品不见了', 402)
        }
    })
}
//删除收藏商品
exports.deleteWantgoods=(req,res)=>{
     //获取解析token
    let usertoken = jwt.decode(req.headers.authorization.slice(7));
  userModel.findOne({phone_id:usertoken.phone_id},{uwantlist:1}).then(docs=>{
        if(docs)
        {
            // res.send({
            //     status:200,
            //     wantdata:docs.uwantlist
            // })
        
      let index=  docs.uwantlist.findIndex(items=>{
            return req.body.goods_id==items.goods_id
        })
        docs.uwantlist.splice(index,1)
        docs.save(err=>{
            if(!err)
            {
                    res.send({
                status:200,
             message:'删除收藏商品成功',
             docs
            })
            }
            else
            {
                res.cc('删除商品失败',301)
            }
        })

         }
        else{
            res.cc('身份认证失败',301)
        }
    }).catch(err=>{
        res.cc('删除失败',302)
    })
}
//回复商品
exports.replyGoods = (req, res) => {
    let usertoken = jwt.decode(req.headers.authorization.slice(7));
    let replytitle = req.body.replytitle
    const replyinfo = req.query
    goodsModel.findOne({
        goods_id: replyinfo.goods_id
    }, {}).then((docs) => {
        //向评论数组中添加的值

        if (replyinfo.reply_id) {
            //二级评论
            let replyindex = docs.greply.findIndex(element => element.reply_id == replyinfo.reply_id)
            docs.greply[replyindex].children.push({
                reply_id: nanoid(),
                phone_id: usertoken.phone_id,
                nickname: usertoken.nickname,
                avatarurl: usertoken.avatarurl,
                replytitle,
                isauthor: usertoken.phone_id == docs.greply[replyindex].phone_id ? 1 : 0,
                children: [

                ]
            })

            docs.save((err) => {
                if (err) {
                    res.cc('评论失败' + null, 301)
                } else {
                    res.send({
                        status: 200,
                        message: '二级评论成功',
                    })
                }
            })
        } else {
            docs.greply.push({
                reply_id: nanoid(),
                phone_id: usertoken.phone_id,
                nickname: usertoken.nickname,
                avatarurl: usertoken.avatarurl,
                replytitle,
                isauthor: usertoken.phone_id == docs.phone_id ? 1 : 0,
                children: [

                ]
            })
            docs.save((err) => {
                if (err) {
                    res.cc('评论失败' + null, 301)
                } else {
                    res.send({
                        status: 200,
                        message: '评论成功',

                    })
                }
            })
        }
    })
}

