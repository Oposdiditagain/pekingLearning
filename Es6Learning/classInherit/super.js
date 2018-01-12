class Point {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		console.log( 'running: ' + new.target.name);
	}
}
// 第一种情况，super作为函数调用时，代表父类的构造函数。

// ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
// ES6 的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。

// 子类使用this, 就必须先调用super(),且必须在子类的 constructor 函数里
class ColorPoint extends Point {
	constructor(x,y,color) {
		super(x,y);
		this.color = color;
	}
	saySomething() {
		console.log("LoL: " + this.color);
	}
}
var point = new Point(2,3);
var color = new ColorPoint(1,2,'red');

// color.saySomething();

// console.log(color instanceof Point); // true
// console.log(color instanceof ColorPoint); //true

// console.log(Object.getPrototypeOf(ColorPoint) === Point); // true

//  ==============> 第二种情况，super作为对象时，在普通方法中，指向父类的原型对象; 在静态方法中，指向父类
class A {
	constructor() {
		this.x = 4;
		this.f = function() {
			console.log('fn in A constructor');
		}

	}
	static myMethod(msg) {
		console.log('static',msg);
	}
	myMethod(msg) {
		console.log('ProtoInstance',msg);
	}
	p() {
		return 2;
	}
}
	A.prototype.y = 3;

class B extends A {
	constructor() {
		super();
		this.x = 5;

		super.x = 6;			 // 此时 super === this 
		// console.log(super.p());  // super 作为对象在普通方法里指向 A.prototype ==> super.p() === A.prototype.p();
		// console.log(super.x);	 // undefined
		// console.log(this.x);	 // 6 
		// console.log(super.y);	 // 3
		// console.log(super.f());	 // 取不到实例(constructor 方法里定义的属性和方法) TypeError : f is not a function 
	}
	static myMethod(msg) {
		super.myMethod(msg);
	}
	myMethod(msg) {
		super.myMethod(msg);
	}
}
// super.p() 通过super 调用父类方法时，方法内部的 this 指向子类

// let b = new B();  //2 
B.myMethod(1);

var child = new B();

child.myMethod(2);
