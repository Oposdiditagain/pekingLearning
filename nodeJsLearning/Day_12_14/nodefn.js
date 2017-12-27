// function say() {
// 	console.log(arguments[0]);
// }

// function execute(someFn){
// 	say(arguments);
// }

// execute(say,'hello');


// 匿名函数
function execute(someFn){
	someFn(arguments);
}

execute(function(){
	console.log(arguments[0]);
},'hello');

var http = require('http');

function onRequest(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("<h1>Hello World in nodeJS<h1>");
	console.log('Server 8900 is listening');
	response.end();
}

http.createServer(onRequest).listen(8900);