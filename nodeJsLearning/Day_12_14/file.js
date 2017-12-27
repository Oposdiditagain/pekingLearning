// 文件系统
var fs = require('fs');

// 读取文件
// 异步和同步
// 例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
// 异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
// 建议大家是用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。


// 异步读取文件 input.txt
	fs.readFile('input.txt',function(error,data){
		if(error){
			console.log.error(error);
		}
		console.log("异步读取 " + data.toString());
	});
	console.log('异步读取文件');

// 同步读取文件 input.txt
	var data = fs.readFileSync('input.txt');
	console.log('同步读取: ' + data );

	console.log("good job");

// 打开文件
// fs.open(path,flags[,mode],callback)
	// path : 文件的路径
	// flags : 文件打开的行为 	"r(只读模式打开,不存在则报错) r+(读写模式打开，如果文件不存在就创建) w(写入模式打开,不存在就创建) w+(读写模式打开) wx(文件存在就抛出异常) …… 等"
	// mode : 设置文件模式(权限) 文件创建默认权限 0666 (可读，可写)
	// callback : 带有俩参数 callback(err,fd)
	console.log('准备打开文件'); 
	fs.open('input.txt','r+',function(err,fd){
		if(err){
			console.log.error(err);
		}
		console.log('文件打开成功');
	});

// 异步获取文件信息	fs.stat(path,callback)
// 	path : 文件的路径
// 	callback : 俩参数 callback(err,stats)  stats 是 fs.stats 对象
// stats 类中的方法
// 	stats.isFile()					// 文件
// 	stats.isDirectory()				// 目录
// 	stats.isBlockDevice()			// 块设备
// 	stats.isCharacterDevice() 		// 字符设备
// 	stats.isSymbolicLink()			// 软链接
// 	stats.isFIFO()					// FIFO 是 UNIX 中一种特殊类型的命令管道 
// 	stats.isSocket()				// Socket

	fs.stat('input.txt',function(err,stats){
		if(err){
			return console.error(err);
		}
		console.log(stats);
		console.log('读取信息成功');
		// 检测类型
		console.log('是否是文件(isFile) :? ' + stats.isFile());
		console.log('是否是目录(isDirectory) :? ' + stats.isDirectory());
	});

// 写入文件 异步 ： fs.writeFile(file,data[,options],callback)
	// file : 文件名或文件描述符
	// data : 要写入文件的数据，可以是String(字符串) 和 Buffer(流) 对象
	// options : 该参数是一个对象，包含{encoding,mode,flag} 默认为 utf8  0666 flag 为 'w'
	// callback : 一个参数 err 
// eg:
	console.log("准备写入文件");
	var str = new String("我是通过写入的内容")
	fs.writeFile('output.txt',str,function(err){
		if(err){
			return console.error(err);
		}
		console.log('数据写入成功');
		console.log('-----------------------');
		console.log('读入写入 output.txt 的内容');
		fs.readFile('output.txt',function(err,data){
			if(err){
				return console.error(err);
			}
			console.log('output 异步读取数据读入成功');
			console.log('output.txt data : ' + data.toString());
		});
	});

// 读取文件 异步 : fs.read(fd, buffer, offset, length, position, callback);
	// fd : fs.open() 方法返回的文件描述符
	// buffer : 数据写入的缓冲区
	// offset : 缓冲区写入的写入偏移量
	// length : 要从文件中读取得字节数
	// position : 文件读取的起始位置
	// callback : 三个参数 err , bytesRead , buffer , err 为错误信息 bytesRead表示读取的字节数,buffer为缓冲区对象

var buff = new Buffer(1024);
	console.log('准备打开已存在的文件');
	fs.open('input.txt','r+',function(err,fd){
		if(err){
			return console.error(err);
		}
		console.log('文件打开成功');
		console.log('准备读取文件buff');
		fs.read(fd,buff,0,buff.length,1,function(err,bytes,buff){
			if(err){
				return console.error(err);
			}
			console.log('实际读取 ' + bytes + ' 字节数');
			// 仅输出读取的字节

			if(bytes > 0){
				console.log(buff.slice(0,bytes).toString());
			}
		})
	});

// 关闭文件 异步 fs.close(fd,callback)
	// fd : fs.oepn()方法返回的文件描述符
	// callback : 没有参数

// 截取文件  fs.ftruncate(fd,len,callback)
	// fd : fs.oepn()方法返回的文件描述符
	// len : 文件内容截取的长度
	// callback : 没有参数
	var string = new String('site:www.mwj.org');
	var buffer = new Buffer(1024);
	fs.writeFile('site.txt',string,function(err){
		if(err){
			return console.error(err);
		}
		console.log(string + ' 成功写入 site.txt ');
		console.log("准备读入 site.txt");
		fs.open('site.txt','r+',function(err,fd){
			if(err){
				return console.error(err);
			}
			console.log('成功打开 site.txt');
			console.log("准备截取 site.txt");
			fs.ftruncate(fd,10,function(err){
				return console.error(err);
			});
			console.log('site.txt 截取成功');
			console.log('读取相同的文件');
			fs.read(fd,buffer,0,buffer.length,0,function(err,bytes,buffer){
				if(err){
					return console.error(err);
				}
				console.log('成功读取相同的文件');
				console.log('读取site.txt 文件字节数 :' + bytes);
				if(bytes > 0){
					console.log('读取site.txt 截取后的文件内容 :' + buffer.slice(0,bytes).toString());
				}
				fs.close(fd,function(err){
					if(err){
						return console.error(err);
					}
					console.log("文件关闭成功");
				});
			});
		});

	});

// 删除文件 fs.unlink(path,callback)
	// path : 文件的路径
	// callback : 没有参数

	// console.log('准备删除文件 delete.txt');
	// fs.unlink('delete.txt',function(err){
	// 	if(err){
	// 		return console.error(err);
	// 	}
	// 	console.log('成功删除文件');
	// });

// 创建目录 fs.mkdir(path[,mode],callback);
	// path : 文件的路径
	// mode : 设置目录权限 默认 0777
	// callback : 没有参数
	console.log("准备在当前目录下创建目录");
	fs.mkdir(__dirname + '/testDir',function(err){
		if(err){
			return console.error(err);
		}
		console.log('成功创建目录 testDir');
	});

// 读取目录 fs.readdir(path,callback)
	// path : 文件的路径
	// callback : 两个参数 err, files 为目录下的文件数组列表
	console.log("准备读取当前目录")
	fs.readdir(__dirname,function(err,files){
		if(err){
			return console.error(err);
		}
		console.log("成功读取当前目录");
		files.forEach( function(file){
			console.log(file);
		});
	});

// 删除目录 fs.rmdir(path,callback)
	// path : 文件的路径
	// callback : 没有参数
	console.log('准备删除 testDir 目录');
	fs.rmdir(__dirname + '/testDir',function(err){
		if(err){
			return console.error(err);
		}
		console.log('删除 testDir 目录成功');
	});

