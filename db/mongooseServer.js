const mongoose=require('mongoose')
const bcrypt = require('bcryptjs')
const dburl='mongodb://101.43.12.130:27017/hbqhb';
const options={
    user:'author',
    pass:'qwert6969.',
    // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect

}
mongoose.connect(dburl,options,(err)=>{

})
mongoose.connection.once('open',function()
{
    console.log('连接成功');
})
mongoose.connection.once("close",function()
{
    console.log('连接已断开');
})