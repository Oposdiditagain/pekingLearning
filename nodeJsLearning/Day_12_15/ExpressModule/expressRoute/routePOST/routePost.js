var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended : false});

app.use(express.static('public'));

app.get("/index.html",function(req,res){
	res.sendFile(__dirname + '/' + 'index.html');
});


app.post("/process_post",urlencodedParser,function(req,res){
	var response = {
		"firstname" : req.body.firstname,
		"lastname" : req.body.lastname
	};

	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen("8900",function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("routePost 实例 : %s 端口 %s",host,port);
});