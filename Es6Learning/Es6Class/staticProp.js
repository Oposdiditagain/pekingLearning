import React from 'react';

// ES6 仅有一种方法定义类的静态属性

class Foo {

}
Foo.prop = 1;
console.log('prop: ' + Foo.prop); // prop: 1

// 类的实例属性

class myClass {
	// myProp = 42;

	constructor() {
		// console.log(this.myProp); // 42 // node-8.9.0 '=' unexpected token
	}
}

class ReactCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}
}

var re = new ReactCounter();
re.count;