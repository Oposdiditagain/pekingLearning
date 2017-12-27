var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/joy';	// joy : 数据库名

var inserData = function(db,callback){
	// 链接到表 joy
	var collection = db.collection('site');
	
	// 插入数据
	var data = [{"name":"mwj","url":"www.joy.com"},{"name":"fgd","url":"www.hoy.com"}];	
	collection.insert(data,function(err,result){
		if(err){
			console.log(err.stack);
			return;
		}
		callback(result);
	});
}


MongoClient.connect(DB_CONN_STR,function(err,db){
	console.log("连接成功！");
	inserData(db,function(result){
		console.log(result);
		db.close();
	});
});