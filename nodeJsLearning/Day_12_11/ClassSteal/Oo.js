// 原型继承

function superType(name,age){
	this.name = name;
	this.age = age;
}




superType.prototype.sayHello = function(){
	console.log(this.name + ' is ' + this.age);
};

sub.prototype = new superType();

function sub(name,age,gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

sub.prototype.sayHi = function(){
		console.log(this.name + ' is ' +this.gender);
	};

var ins = new superType('mao',22);
var ins2 = new sub('wen',23,'男');

ins.sayHello();
ins2.sayHello();
ins2.sayHi();
