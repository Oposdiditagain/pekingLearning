// Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
// 你可以使用 express.static 中间件来设置静态文件路径。
// 例如，如果你将图片， CSS, JavaScript 文件放在 public 目录下，你可以这么写：
// app.use(express.static('public'))

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
	console.log(" Get 请求响应");
	res.send('Hello my express static');
});

var server = app.listen("8900",function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("expressStatic 实例 : %s 端口 %s",host,port);
});