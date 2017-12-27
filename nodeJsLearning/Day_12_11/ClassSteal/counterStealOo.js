// 组合继承
function superType(name,age){
	this.name = name;
	this.age = age;
	this.colors = ['red','blue','green'];
}

superType.prototype.sayHello = function(){
	console.log(this.name + ' age :' + this.age + ' colors: ' + this.colors);
};


function sub(name,age,gender){
	superType.call(this,name,age);

	this.gender = gender;
}

sub.prototype = new superType();
sub.prototype.constructor = sub;
sub.prototype.sayHi = function(){
	
	console.log(this.name + '  age : ' + this.age + ' gender: ' + this.gender);

};

var ins = new sub('mao',22,'男');
var ins2 = new sub('dan',21,'女');
ins.colors.push('black');

ins.sayHello();
ins2.sayHello();
ins.sayHi();