var http = require('http');
var url = require('url');
var fs = require('fs');

	http.createServer(function(req,res){
		// 解析路径名
		var pathname = url.parse(req.url).pathname;
		if(pathname != '/favicon.ico'){
			console.log("request for " + pathname + " received");
			fs.readFile(pathname.substr(1),function(err,data){
				if(err){
					console.error(err);
					// 文件未找到 404 状态码 : Not Found
	 				// Content-Type: text/plain
					res.writeHead(404,{"Content-Type":"text/plain"});
				}else{
					// 成功找到资源 200 : 成功
					// Content-Type: text/html
					res.writeHead(200,{"Content-Type":"text/html"});
					// 返回内容
					res.write(data.toString());
				}
				res.end();
			});
		}

	}).listen(8080);

	console.log("Server is listening 8080");