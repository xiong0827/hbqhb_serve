//导入定义规则的包
const joi = require('joi');
//定义用户名和密码的验证规则
const username = joi.string().required().alphanum().min(1).max(10);
// const password = joi.string().pattern(/^[\S]{6,12}$/).required();
//注册
const password=joi.string().required().regex(/^[a-zA-Z]\S{6,12}$/);
const id = joi.number().integer().min(1).required();
//
const nickname = joi.string().required();
const email = joi.string().email();
const avatar = joi.string().required().dataUri()
const phone_id=joi.string().required().regex(/^(13[0-9]|14[5|7]|19[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|16[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|5|6|7|8|9])\d{8}$/)
//验证码
exports.reg_phonecode_schema = {
        body: {
            phone_id
        }
    },
//注册
exports.reg_userinfo_schema = {
        body: {
            phone_id,
            password
       
        }
    }
    //修改密码
exports.reg_updatepassword_schema={
    body:{
        password
    }
}
//修改个人信息
exports.reg_updateuserinfo_schema={
    body:{
        nickname:joi.string().min(3).max(10),
        address:joi.string().trim(),
        gender:joi.string().trim(),
        avatar:joi.string().trim(),
        birthday:joi.string().trim()
    }
}
exports.update_userinfo_schema = {
    body: {
        id,
        nickname,
        email,
    },
}
exports.reg_login_schema = {
    body: {
        phone_id,
        password,
    }
}
exports.update_password_schema = {
    body: {
        // 使用 password 这个规则，验证 req.body.oldPwd 的值
        oldPwd: password,
        // 使用 joi.not(joi.ref('oldPwd')).concat(password) 规则，验证 req.body.newPwd 的值
        // 解读：
        // 1. joi.ref('oldPwd') 表示 newPwd 的值必须和 oldPwd 的值保持一致
        // 2. joi.not(joi.ref('oldPwd')) 表示 newPwd 的值不能等于 oldPwd 的值
        // 3. .concat() 用于合并 joi.not(joi.ref('oldPwd')) 和 password 这两条验证规则
        newPwd: joi.not(joi.ref('oldPwd')).concat(password),
    },
}
exports.update_avatar_schema = {
    body: {
        avatar
    }
}