let userMoudule = require('../db/usersinfo')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const req = require('express/lib/request');
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
        res.cc('获取个人信息失败' + null, 402)
    })
}
//修改个人信息
exports.updateInfo = (req, res) => {
    let avatarurl = 'http://101.43.12.130:3000/' + req.file.path.replace(/\\/g, '/')
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
        if (req.file) {
            docs.avatarurl = avatarurl
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
        phone_id:usertoken.phone_id
    },{}).then(docs => {
            if (docs) {
                const compareResult = bcrypt.compareSync(req.body.oldpassword, docs.password)
                if (compareResult) {
                    docs.password = bcrypt.hashSync(req.body.password, 10)
                    docs.save(err => {
                        if (err) {
                            res.cc('修改密码失败' + err, 301)
                        } else {
                            res.cc('修改密码成功', 200)
                        }
                    })
                } else {
                    res.cc('原密码错误', 301)
                }
            }
         else {
            res.cc('身份认证失败', 301)
        }

    }).catch(err => {
    res.cc('修改密码失败' + err, 301)
})
}