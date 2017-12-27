// exports.world = function(){
// 	console.log('hello world');
// }

// 模块

function Hello(){
	this.name = "";
	this.setName = function(thyname){
		this.name = thyname;
	}
	this.sayHello = function(){
		console.log('Hello:' + this.name);
	}
}

module.exports = Hello;