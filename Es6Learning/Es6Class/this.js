class Logger{
	constructor(){
		this.printName = this.printName.bind(this);
	}
	printName(name = 'there'){
		// ``
		this.print(`Hello ${name}`);
	}
	print(text){
		console.log(text);
	}
};

const L1 = new Logger();
const {printName} = L1;

printName();
L1.printName();

// name 属性总是返回紧跟在 class 关键字后面的类名

const myClass = class Me{

}
console.log(myClass.name);