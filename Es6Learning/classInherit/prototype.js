// 原理
// Object.setPrototypeOf = function(obj, proto){
// 	obj.__proto__ = proto;
// 	return obj;
// }

// B 的实例继承 A 的实例
// Object.setPrototypeOf(B.prototype, A.prototype);  ===> B.prototype.__proto__ = A.prototype
// B 的实例继承 A 的静态属性
// Object.setPrototypeOf(B, A); ===> B.__proto__ = A;

class A {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
}

class B extends A {
	constructor(x,y,color) {
		super(x,y);
		this.color = color;
		console.log(B.__proto__ === A); // true
		console.log(B.prototype.__proto__ === A.prototype);  // true
	}
}

let a = new A(2,3);
let b = new B(1,2,'green');


console.log(b.__proto__ === B.prototype);	// true
console.log(b.__proto__.__proto__ === A.prototype);			// true
console.log(a.__proto__.__proto__ === Object.prototype);	// true
console.log(b.__proto__.__proto__ === a.__proto__);			// true
console.log(b.prototype);	// undefined
console.log(B.prototype);	// B {} 一个用于保存公共属性和方法的对象

b.__proto__.__proto__.print = function() {	// b.__proto__.__proto__ === A.prototype
	console.log("lol");
}

a.print();	// lol
b.print();	// lol