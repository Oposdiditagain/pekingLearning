var express = require('express');
var fs =require('fs');

var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(multer({ dest : '/public' }).array('image'));			// image 与 input 的 name 属性相同

app.get('/index.html',function(req,res){
	res.sendFile(__dirname + '/' +'index.html');
});

// var urlencodedParser = bodyParser.urlencoded({'extended' : false});

app.post('/file_upload',function(req,res){
	console.log(req.files[0]);	// 上传的文件信息

	var des_file = __dirname + "/" + req.files[0].originalname;
	fs.readFile(req.files[0].path , function(err,data){
		if(err){
			console.error(err);
		}else{
			var response = {
					message : 'File uploaded successfully',
					filename : req.files[0].originalname
			};
		}
	var tmpPath = req.files[0].path;
	var targetPath = __dirname  +'/public/'+ response.filename;
	fs.rename(tmpPath,targetPath,function(err){
		if(err){
			console.error(err);
		}else{
			req.files[0].path = targetPath;
			console.log("rename file Ok");
			// console.log(req.files[0]);
		}
	});
		console.log(response);
		res.end( JSON.stringify(response) );
	});


});

var server = app.listen("8900",function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("uploader 实例 : %s port : %s",host,port);
});