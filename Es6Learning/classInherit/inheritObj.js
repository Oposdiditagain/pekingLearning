class NewObj extends Object {
	constructor() {
		super(...arguments);
	}
}
// ES6 改变了Object构造函数的行为，一旦发现Object方法不是通过new Object()这种形式调用，
// ES6 规定Object构造函数会忽略参数
let obj = new NewObj({attr:true});

console.log(obj.attr);	// undefined