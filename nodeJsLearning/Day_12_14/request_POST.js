var http = require('http');
var querystring = require('querystring');

var postHTML =
  '<html><head><meta charset="utf-8"><title>NodeJs -- Request_POST</title></head>' +
  '<body>' +
  '<form method="post">' +
  '姓名：<input name="name"><br>' +
  '年龄：<input name="age"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
	http.createServer(function(req,res){
		var body = "";
		req.on("data",function(chunk){
			console.log("chunk: " + chunk);
			body += chunk;
		});	
		req.on("end",function(){
			// 解析参数
			body = querystring.parse(body);

			// 设置响应头信息及编码
			res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});

			if(body.name && body.age){ // 输出提交的数据
				res.write("<span>姓名:</span><span>" + body.name + "</span><br/>");
				res.write("<span>年龄:</span><span>" + body.age + "</span>");
			}else{ // 输出表单
				res.write(postHTML)
			}
			res.end();
		});
	}).listen(9000);

	console.log("Server is listening 9000...");