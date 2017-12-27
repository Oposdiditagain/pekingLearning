var fs = require('fs');

var data = "";

							// 读入流

// 创建可读流

var readerStream = fs.createReadStream('input.txt');

// 设置编码为'utf8'

readerStream.setEncoding('UTF8');

// 处理流事件  --> data ,end , and error

readerStream.on('data',function(buf){
	data += buf;

});


readerStream.on('end',function(){
	console.log('received: '+ data);
});

readerStream.on('error',function(){
	console.log(error.stack);
});

console.log('good job');

							// 写入流
var writeData = "glad to see u , my stream";
var writeStream = fs.createWriteStream('output.txt');

// 使用 UTF8 编码
writeStream.write(writeData,'UTF8');

// 标记文件末尾
writeStream.end();

// 处理流事件 finish error

writeStream.on('finish',function(){
	console.log('finish writing');
});

writeStream.on('error',function(){
	console.log(error.stack);
})

console.log('good job to write');

							// 管道流
var pipeReadStream = fs.createReadStream('pipeInput.txt');

var pipeWriteStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中

pipeReadStream.pipe(pipeWriteStream);
console.log('good job to pipe data');

							// 链式流
// 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
// 接下来我们就是用管道和链式来压缩和解压文件。
							// 压缩
var zlib = require('zlib');

fs.createReadStream('pipeInput.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('ss.txt.gz'));

console.log('good job to compress');

							