const mongoose=require('mongoose')
const config=require('../config')
const dburl=config.serverIp
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