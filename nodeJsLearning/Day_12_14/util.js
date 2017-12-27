//** util 是一个 NodeJs 核心模块,提供常用函数的集合

// util.inherits(constructor,superConstructor) 是一个实现 对象之间原型继承 的函数

// eg:
var util = require('util');

function superType(name,age,town){
	this.name = name;
	this.age = age;
	this.town = town;
	this.sayHello = function(){
		console.log('hello ' + this.name + ' ' + this.age + ' ' + this.town);
	}
}

superType.prototype.showAge = function(){
	console.log('my age is ' + this.age);
}

function sub(name,age,town,gender){
	this.gender = gender;
}
sub.prototype.showGender = function(){
	console.log('my gender is : '+ this.gender);
}

util.inherits(sub,superType);

var ins = new superType('mao',22,'Hubei');
ins.sayHello();
ins.showAge();
console.log(ins);

var insub = new sub('Fgd',22,'chongqing','女'); // 只传入sub 构造函数中定义的属性
insub.showAge();			 	// my age is undefined
insub.showGender();				// my gender is 女
console.log(insub);				// 只继承了superType 的原型方法 ，而构造函数内部的属性和方法 都没有继承

//  util.inspect(obj,[showHidden],[depth],[colors]) 是一个将任意对象转换为字符串的方法 通常用于调试和错误输出 至少接收obj参数
	// showHidden 是一个可选参数 如果为true，将显示更多隐藏信息
	// depth 表示最大递归层数，可指定递归层数，默认 2 层 , null : 表示将不递归层数完整遍历对象
	// colors  true 则输出格式以 ANSI 颜色编码 用于美化
// eg:
function Person(name,age,town){
	this.name = name;
	this.age = age;
	this.town = town;
	this.sayHello = function(){
		console.log('hi this is ' + this.name);
	}
};

var obj = new Person('Mwj',22,'Hubei');
console.log(util.inspect(obj));
console.log(util.inspect(obj,true,2,true));

// util.isArray(obj) 判定 obj 是否是数组 是返回 true 否则 flase

console.log(util.isArray([])); 
console.log(util.isArray(new Array())); 
console.log(util.isArray({})); 

// util.isRegExp(obj) 判定 obj 是否是正则表达式
console.log(util.isRegExp(/some regexp/));
console.log(util.isRegExp(new RegExp()));
console.log(util.isRegExp({}));

// util.isDate(obj) 判定 obj 是否是一个日期
console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));  // without new return a Srting
console.log(util.isDate({}));

// util.isError(obj) 判定 obj 是否是一个错误对象
console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isError({name:"Error",message:"an Error occurred"}));

