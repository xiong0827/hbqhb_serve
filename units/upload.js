const fs = require('fs')
const path = require('path')
const multer = require('multer')
 //配置文件上传
 const storage=multer.diskStorage({
    // 设定存储路径
    destination:function(req,file,cb)
    {
        // req本次请求信息
        // file本次请求的文件s
        // cb回调函数设置存路径
        cb(null,'./uploads/'+file.fieldname)
    },
    //设定文件名称
    filename:function(req,file,cb)
    {
    //    req本次请求信息
    // file本次上传的文本
    // cb回调函数
    const tmp=path.extname(file.originalname)
    // cb(null,`随便.png`)
    cb(null,`avatar_${new Date().getTime()}-${Math.floor(Math.random()*100).toString()}${tmp}`)
    }
})
const fileUpload=multer({storage})
module.exports=fileUpload