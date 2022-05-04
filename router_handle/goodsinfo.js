const {
    v4: uuidv4
} = require('uuid');
const goodsModel = require('../db/goodsinfo')
//解析token
const jwt = require('jsonwebtoken')
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
exports.issueGoods = (req, res) => {
    //截取token
    console.log(req.files);
    let usertoken = req.headers.authorization.slice(7);
    let uuid = uuidv4()
    const goodsinfo = req.body
    //解析token
    usertoken = jwt.decode(usertoken)
    goodsModel.create({
        goods_id: uuid,
        title: goodsinfo.title,
        details: goodsinfo.details,
        gclassone: goodsinfo.gclassone,
        gprice: goodsinfo.gprice,
        phone_id: usertoken.phone_id
    }, function (err, docs) {
        if (!err) {
            res.cc('添加商品成功', 200, docs)
        } else {
            res.cc(err, 301)
        }
    })
}