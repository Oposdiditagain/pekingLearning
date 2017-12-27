// 寄生组合继承
// 避免多次使用superType 的构造函数
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

function inheritPrototype(sub,superType){
	var prototype = object(superType.prototype);
	prototype.constructor = superType;
	sub.prototype = prototype;
}

sub.prototype.sayGender = function(){
	console.log(this.gender + ' colors: ' +this.colors);
};

inheritPrototype(sub,superType);
var ins = new superType('mao',22);
ins.colors.push('black');
var ins1 = new sub('wen',23,'男');

ins.sayHello();
ins1.sayGender();