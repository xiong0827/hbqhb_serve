require('./mongooseServer')
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const goodsclassSchema=new Schema({
    classname:{
        type:String,
        unique:true,
        trim: true,
    },
    classurl:{
        type:String,
        trim: true,
    }
})
var gclassModel=mongoose.model('goodsclasses',goodsclassSchema)
module.exports = gclassModel

// gclassModel.create({
//     classname: '手机数码',
//     classurl: 'http://101.43.12.130:3000/uploads/classimages/digital.png'
// },(err)=>
// {
//     if (err) {
//         console.log(err);
//     }
// })
