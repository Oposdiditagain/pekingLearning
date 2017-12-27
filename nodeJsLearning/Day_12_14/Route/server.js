var http = require('http');
var url = require('url');
var querystring = require('querystring');

function start(route){
		// URL : http://localhost:8890/start?foo=bar&hello=world
		// pathname = url.parse(request.url).pathname
		// query = url.parse(request.url).query
		// var foo = query.parse(query)["foo"];
		// var hello = query.parse(query)["hello"];
	var foo = "";
	var hello = "";

	http.createServer(function(request,response){
		var pathname = url.parse(request.url).pathname;      // 获得路径
		var query = url.parse(request.url).query;
		foo = querystring.parse(query)["foo"];
		hello = querystring.parse(query)["hello"];
		if(pathname != '/favicon.ico'){
			route(pathname);

		}	
		if(foo == undefined){
			console.log("this foo is undefined");
		}
		if(typeof(foo) != 'undefined' && typeof(hello) != 'undefined'){
			console.log('foo: ' + foo + " hello: " + hello);

		}
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write("<h1>You are parsing the url</h1>")
		response.end();
	}).listen(8890);
}
	
	console.log('Start listen 8890');

exports.start = start;