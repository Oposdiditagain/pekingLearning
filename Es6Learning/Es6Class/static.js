class myClass {

	static classMethod() {
		console.log('hello');
	}
}
// 加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
myClass.classMethod();

var ex = new myClass();

// ex.classMethod(); 
// TypeError: is not a function

class Foo {
	constuctor(){

	}
	static bar() {
		this.baz();   // this 指代 Foo 类 而不是 Foo 实例
	}
	static baz() {
		console.log('hello');
		return 'hello';
	}
	baz() {
		console.log('world');
	}
}

class Sub extends Foo {
	constuctor() {}
	static deBaz() {
		let val = super.baz() + ', too';
		console.log('val: ' + val);
		return val;
	}
}
Sub.deBaz();

var foo = new Foo();

Foo.bar();	// hello

// foo.bar();	
// TypeError : is not a function

foo.baz();	// world


// 静态方法不会被实例继承，但是可以被子类继承,但是同样子类实例不会继承
class Bar extends Foo {

}

Bar.bar();  // hello

var bar = new Bar();
// bar.bar();	// TypeError : is not a function

// 静态方法还可以从 super 对象上调用

class Rectangle {
	constuctor() {}
	static logNbsides() {
		return 'I have 4 sides';
	}
}

class Square extends Rectangle {
	constuctor() {}
	static logDescription() {
		console.log(super.logNbsides() + ' which are equal');
	}
}
Square.logDescription(); // I have 4 sides which are equal


