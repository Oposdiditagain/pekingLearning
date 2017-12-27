var events = require('events');
var emitter = new events.EventEmitter();

var buff = Buffer.alloc(256);
len = buff.write('glad to see my buffer');

console.log('输入字节数:' + len);
console.log('String: ' + buff.toString('ascii'));

var buff2 = Buffer.alloc(26);

for(var i = 0;i < 26;i++){
	buff2[i] = i + 97;
}

console.log('String: ' + buff2.toString('ascii'));
console.log('String: ' + buff2.toString('ascii',0,5));
console.log('String: ' + buff2.toString('utf8',0,5));
console.log('String: ' + buff2.toString(undefined,0,5));

// Buffer 转换为 JSON 对象 Buffer.toJSON() 

var buff3 = Buffer.from('Glad to see u');
var buffJson = buff3.toJSON();

function transfer(arr){
	var len = arr.length;
	var array = [];
	for(let i = 0;i < len;i++){
		array[i] = String.fromCharCode(arr[i]);
	}
	return array;
}
var transArr = transfer(buffJson.data);

// emitter.on('transfermation',transfer);
// emitter.emit('transfermation',buffJson.data);
console.log('jsonString:' + transArr.join('').split(' '));

// Buffer 缓冲区合并 Buffer.concat(list[, totalLength])

var buf1 = Buffer.from('Mwj ');
var buf2 = Buffer.from('Fgd');
var buf3 = Buffer.concat([buf1,buf2]);
console.log('good job:' + buf3.toString());

// Buffer 比较 buffer.compare(otherBuffer);

var b1 = Buffer.from('MwjLove');
var b2 = Buffer.from('Fgd');

var result = b1.compare(b2);

if(result < 0){
	console.log('b1 在 b2 后面');
}else if(result == 0){
	console.log('b1 与 b2 相同');
}else{
	console.log('b1 在 b2 前面');
}

// Buffer 拷贝 buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
// targetBuffer - 要拷贝的 Buffer 对象。
// targetStart - 数字, 可选, 默认: 0
// sourceStart - 数字, 可选, 默认: 0
// sourceEnd - 数字, 可选, 默认: buffer.length

// buffer.copy(targetBuffer) 没有返回值

console.log('b1:' + b1);
// 把b2 复制到 b1 的第三个位置
b2.copy(b1,1,0,b2.length);
console.log('new b1:' + b1);

// Buffer 裁剪 Buffer.slice()
var b3 = b1.slice(1);
console.log('b3:' + b3);