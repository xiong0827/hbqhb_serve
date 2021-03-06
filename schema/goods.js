const joi = require('joi');
//商品详情
const details = joi.string().required().min(8).max(300)
//商品标题
const title = joi.string().required().min(3).max(30)
//商品分类
const gclassone = joi.string().required().min(2).max(8).trim()
//商品价格
const gprice = joi.number().required().min(0.1).max(999999)
//商品图片
const photo = joi.array().min(1)
//插入商品
exports.reg_insertgoods_schema = {
    body: {
        details,
        title,
        gclassone,
        gprice,
        photo
    }
}
exports.reg_showgoods_schema = {
    body: {
        pagenum: joi.number().required().min(1).max(10),
        atpage: joi.number().required().min(1),
        gclassone: joi.string().trim(),
        gpricesort: joi.number().max(1).min(-1),
        gtimesort: joi.number().max(1).min(-1),
        searchkeyword: joi.string().trim().max(12)
    }
}
exports.reg_goodsid_schema={
    query:{
        goods_id:joi.string().trim().required(),
        reply_id:joi.string().trim()
    },
    body:{
        replytitle:joi.string().trim().min(1).max(30)
    }
}