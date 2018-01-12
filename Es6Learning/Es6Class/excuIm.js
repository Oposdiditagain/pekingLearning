var person = new class{
	constructor(name){
		this.name = name;
	}
	sayName(){
		console.log(this.name);
	}
}('张三');

person.sayName();

const myClass = class Me{
	getClassName(){
		console.log(Me.name);
	}
};
let inst = new myClass();
inst.getClassName();
// console.log(Me.name);