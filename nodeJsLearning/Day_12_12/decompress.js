// 解压 ERROR sos 
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('pipeInput.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('decompress.txt'));

console.log('good job to decompress');