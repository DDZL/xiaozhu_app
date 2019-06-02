//app.js
//1:复制服务器端模块
//2:引入第三方模块
//  mysql/express/
const mysql = require("mysql");
const express = require("express");
const cors=require('cors');
//3:创建连接池
const pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"xiaozhu"
});
//4:创建express对象
var server = express(); 
//5:绑定监听端口 3000
server.listen(3000);
server.use(cors({origin:["http://127.0.0.1:8080","http://127.0.0.1:5500"],credentials:true}))
//6:处理用户登录请求
  //login GET
server.get("/login",(req,res)=>{
  //6.1:获取参数
  var name = req.query.name;
  var pwd = req.query.pwd;
  //6.2:创sql
  var sql = "SELECT id FROM xiaozhu_login";
  sql+=" WHERE name = ? AND pwd=md5(?)";
  //6.3:执行sql
  pool.query(sql,[name,pwd],(err,result)=>{
     if(err)throw err;
     //6.4:获取返回结果
     //6.5:判断结果返回 登录成功或者失败
     if(result.length==0){
       res.send({code:-1,msg:"用户名或密码有误"});
     }else{
       res.send({code:1,msg:"登录成功"})
     }
  });
}); 






