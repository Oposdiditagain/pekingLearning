// Class 内部调用new.target，返回当前 Class。
// 需要注意的是，子类继承父类时，new.target会返回子类。
class Shape {
	constructor() {
		console.log(new.target.name);
		if(new.target === Shape) {
			console.log(new Error('本类不能实例化'));
		}
	}
}

class Rectangle extends Shape {
	constructor(length,width) {
		super();
		console.log('success');
	}
}

var s = new Shape();		// Error
var r = new Rectangle(3,4); // success