// 路由

var express = require('express');
var app = express();

// 页面输出

app.get('/',function(req,res){
	console.log("主页 GET 请求");
	res.send("Hello Get");
});

// POST 请求

app.post("",function(req,res){
	console.log("主页 POST 请求");

	res.send('Hello Post');
});

// /del_user 页面响应 

app.get('/del_user',function(req,res){
	console.log("/del_user 响应 DELETE 请求");
	res.send("删除页面");
});

// /list_user 页面请求

app.get('/list_user',function(req,res){
	console.log("/list_user GET 请求响应");
	res.send("用户列表页面");
});

// 对页面正则 abcd,ab*cd,ab12cd 等响应get
app.get('/ab*cd',function(req,res){
	console.log("正则表达式 ab*cd GET请求响应");
	res.send("正则匹配");
});

var server = app.listen("9090",function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("express 应用实例, 访问地址 %s 访问端口 %s",host,port);
});

