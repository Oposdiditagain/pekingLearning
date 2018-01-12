const bar = Symbol('bar');
const snaf = Symbol('snaf');

// 类不存在变量提升 即必须先定义，后实例化

class myClass{
	// 共有方法
	foo(baz){
		this[bar](baz);
	}

	// 私有方法
	[bar](baz){
		this[snaf] = baz;
		// console.log(this[snaf]);
		return this[snaf] = baz;
	}

}

var p1 = new myClass();

console.log(p1.foo('xx'));
	// #var 可以指定私有属性和方法
// class Counter {
// 	#value = 0;

// 	get #x() { return #value }
// 	set #x(value) { this.#value = value }

// 	construnctor() {
// 		super();
// 	}
// }


// console.log(p1.bar('zz'));

// var c1 = new Counter();

// console.log(c1.get());
// c1.set(123);
// c1.get(c1.get());