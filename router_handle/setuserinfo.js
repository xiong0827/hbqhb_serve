let userMoudule = require('../db/usersinfo')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const req = require('express/lib/request');
const config=require('../config')
//获取个人信息
exports.getUserInfo = (req, res) => {
    
    let phone_id = req.query.phone_id?req.query.phone_id:jwt.decode(req.headers.authorization.slice(7)).phone_id;
    
    userMoudule.findOne({
        phone_id
    }, '-_id -password').then(docs => {
        if (docs) {
            res.send({
                status: 200,
                messgae: '获取信息成功',
                userinfolist: docs
            })
        } else {
            res.cc('获取信息失败', 301)
        }
    }).catch(err => {
        res.cc('获取个人信息失败' + err, 402)
    })
}
//修改个人信息
exports.updateInfo = (req, res) => {
    let usertoken = jwt.decode(req.headers.authorization.slice(7));
    let userinfo = req.body
    userMoudule.findOne({
        phone_id: usertoken.phone_id
    }, {}).then(docs => {
        if (userinfo.nickname) {
            docs.nickname = userinfo.nickname
        }
        if (userinfo.gender) {
            docs.gender = userinfo.gender
        }
        if (userinfo.address) {
            docs.address = userinfo.address
        }
        if (userinfo.birthday) {
            docs.birthday = userinfo.birthday
        }
        docs.save((err) => {
            if (err) {
                res.cc('保存失败', 301)
            } else {
                res.send({
                    status: 200,
                    messgae:'保存成功',
                })
            }
        })
    })
}
exports.updateUserAvatar=(req,res)=>{
    let avatarurl = config.serverIp+'/' + req.file.path.replace(/\\/g, '/')
    let usertoken = jwt.decode(req.headers.authorization.slice(7));
    userMoudule.findOne({
        phone_id: usertoken.phone_id
    }, {}).then(docs => {
        if (req.file) {
            docs.avatarurl = avatarurl
        }
        else{
            res.cc('修改头像失败',301)
        }
        docs.save((err) => {
            if (err) {
                res.cc('修改头失败像', 301)
            } else {
                res.send({
                    status: 200,
                    messgae:'保存成功'
                })
            }
        })
    })
}
//修改密码
exports.updatePassword = (req, res) => {
    let usertoken = jwt.decode(req.headers.authorization.slice(7));
    userMoudule.findOne({
            phone_id: usertoken.phone_id
        }, {})
        .then(docs => {
            if (docs) {
                const compareResult = bcrypt.compareSync(req.body.oldpassword, docs.password)
                return {
                    docs,
                    compareResult
                }
            } else {
                return Promise.reject(new Error('身份认证失败'))
            }
        }).then(data => {
            if (!data.compareResult) {
                throw new Error('原密码错误')
            } else if (req.body.oldpassword === req.body.password) {
                throw new Error('新旧密码不可相同')
            } else {
                return data
            }
        }).then(data => {
            data.docs.password = bcrypt.hashSync(req.body.password, 10)
            data.docs.save(err => {
                if (err) {
                    throw new Error('修改密码失败')
                } else {
                    res.cc('修改密码成功', 200)
                }
            })
        })
        .catch(err => {
            res.cc(err, 301)
        })
}