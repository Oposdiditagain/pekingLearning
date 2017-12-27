var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html',function(req,res){
	res.sendFile(__dirname + '/' + 'index.html');  // 找寻index.html 并跳转
});

app.get('/process_get',function(req,res){
	// 输出 JSON 格式

	var response = {
		"firstname":req.query.firstname,
		"lastname":req.query.lastname
	};

	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen("8900",function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("expressRoute 实例 %s 端口 %s",host,port);
})