class myClass {
	constructor(){
		this.pro = "";
	}
	get prop() {
		console.log('getter: ' + this.pro);
	}
	set prop(value) {
		this.pro = value;
		console.log('setter: ' + value);
	}
}

let inst = new myClass();

inst.prop;

inst.prop = 123;

inst.prop;

