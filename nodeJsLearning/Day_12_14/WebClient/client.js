// 使用node 创建node 客户端
var http = require('http');

var options = {
	host: '127.0.0.1',
	port: '8080',
	path: '/index.html'
};
// 处理相应的毁掉函数
var callback = function(response){
	// 不断更新数据
	var body = "";
	response.on("data",function(data){
		body += data;
	});

	response.on("end",function(){
		// 数据接收完成
		console.log(body);
	});
}

// 向服务器发送请求

var req = http.request(options,callback);
req.end();