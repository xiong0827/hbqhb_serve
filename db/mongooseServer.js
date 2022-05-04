const mongoose=require('mongoose')

const dburl='mongodb://101.43.12.130:27017/hbqhb';

mongoose.connect(dburl,(err)=>{

})
mongoose.connection.once('open',function()
{
    console.log('连接成功');
})
mongoose.connection.once("close",function()
{
    console.log('连接已断开');
})