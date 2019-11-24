// 入口文件
// 图书管理系统
const path=require('path');

const express=require('express');
const router=require('./router.js');
const template=require('art-template');
const bodyParser=require('body-parser');
const app=express();

// 启动静态资源服务
app.use('/www',express.static(path.join(__dirname,'/public')));

//设置模板引擎
app.set('views',path.join(__dirname,'views'));
app.set('view engine','art');
app.engine('art',require('express-art-template'));

//处理请求参数
//挂载参数处理中间件（只能处理post请求） 这行是必须有的
app.use(bodyParser.urlencoded({ extended: false }));
//处理json格式的参数
app.use(bodyParser.json());

//启动服务器功能
//配置路由
app.use(router);
// 监听端口
app.listen(3000,()=>{
    console.log('running');
});