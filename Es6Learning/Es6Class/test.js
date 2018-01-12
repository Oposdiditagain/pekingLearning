class point{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	printName(){
		return 'Ls';
	}
}



var p1 = new point(1,2);
var p2 = new point(3,4);

p1.__proto__.printName = function() { return 'Opos' };
console.log(p1.printName());
console.log(p2.printName());

var p3 = new point(4,5);
console.log(p3.printName());
