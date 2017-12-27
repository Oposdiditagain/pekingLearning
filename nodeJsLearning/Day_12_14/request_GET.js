var http = require('http');
var url = require('url');
var util = require('util');

	http.createServer(function(request,response){
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write('<h1>request test</h1>');
		var pathname = url.parse(request.url,true).pathname;
		var query = url.parse(request.url,true).query;

		response.write('name : ' + query.name);
		response.write('pathname : ' + pathname);
		if(pathname != '/favicon.ico'){
			console.log(util.inspect(url.parse(request.url,true),true,2,true));
		}
		response.end();
		
		
	}).listen(9000);

	console.log('Server start listening 9000');