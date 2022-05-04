let userMoudule = require('../db/usersinfo')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const QcloudSms = require('qcloudsms_js')
const config = require('../config')
//注册账号
exports.registerUser = (req, res) => {
    //获取请求值
    let userinfo = req.body
    //查找是否有该账户
    userMoudule.findOne({
        phone_id: userinfo.phone_id
    }, {
        phone_id: 1
    }, (err, docs) => {
        if (err) {
            res.cc('注册错误')
        } else if (!docs) {
            //注册账号
            userinfo = {
                ...userinfo,
                nickname: 'sg' + (Math.floor(Math.random() * (999 - 100)) + 100)
            }
            userinfo.password = bcrypt.hashSync(userinfo.password, 10)
            userMoudule.create(userinfo, function (err, docs) {
                if (err) {
                    res.cc(err, 201)
                } else {
                    res.cc('注册成功', 200, {
                        data: docs
                    })
                }
            })
        } else {

            res.cc('已有该账号', 301)
        }

    })
    // res.cc({
    //     status: 1,
    //     msg: '成功'
    // })
}
//登录账号
exports.loginUser = (req, res) => {
  
    const userinfo = req.body
    userMoudule.findOne({
        phone_id: userinfo.phone_id,
    }, {
        phone_id: 1,
        password: 1,
        nickname: 1,
        avatarurl: 1
    }, function (err, docs) {
        if (!err) {
            if (!docs) {
                res.cc('请注册账号', 201)
            } else {

                //解密对比
                const compareResult = bcrypt.compareSync(userinfo.password, docs.password)
                //判断账号密码
                if (compareResult) {
                    const user = {
                        ...docs.toObject(),
                        password: '',
                    }
                    const tokenstr = jwt.sign(user, config.jwtSecretKey, {
                        expiresIn: config.expiresIn
                    })
                     
                    res.send({
                        status: 200,
                        message: '登录成功',
                        //为了方便客户端使用token 拼接了bearer
                        token: 'Bearer ' + tokenstr
                    })
                }
                else{
                    res.cc('账号或密码错误',201)
                }

            }
        }
    })
}
//获取手机验证码
exports.getcode = function (req, res) {
    if (!req.body.phone_id) {
        res.cc('请输入手机号', 201)
    }
    var appid = 1400187558; // SDK AppID是1400开头
    // 短信应用SDK AppKey
    var appkey = "dc9dc3391896235ddc2325685047edc7"
    // 需要发送短信的手机号码
    var phoneNumbers = [req.body.phone_id];

    // 短信模板ID，需要在短信应用中申请
    var templateId = 285590; // NOTE: 这里的模板ID`7839`只是一个示例，真实的模板ID需要在短信控制台中申请
    //templateId 7839 对应的内容是"您的验证码是: {1}"
    // 签名
    var smsSign = "三人行慕课"; // NOTE: 这里的签名只是示例，请使用真实的已申请的签名, 签名参数使用的是`签名内容`，而不是`签名ID`
    // 实例化QcloudSms
    var qcloudsms = QcloudSms(appid, appkey)
    // 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
    function callback(err, ress, resData) {
        if (err) {
            res.cc('获取验证码失败', 201)
        } else {
            // res.cc('获取验证码成功',200,ress.req);
            res.send({
                status: 200,
                message: '获取验证码成功',
                data: ress.req.body.params
            })
            // res.cc(resData);
        }
    }
    var Num = "";
    for (var i = 0; i < 6; i++) {
        Num += Math.floor(Math.random() * 10);
    }
    var ssender = qcloudsms.SmsSingleSender();
    var params = [`${Num}`]; //数组具体的元素个数和模板中变量个数必须一致，例如事例中templateId:5678对应一个变量，参数数组中元素个数也必须是一个
    ssender.sendWithParam(86, phoneNumbers[0], templateId,
        params, smsSign, "", "", callback); // 签名参数未提供或者为空时，会使用默认签名发送短信
}