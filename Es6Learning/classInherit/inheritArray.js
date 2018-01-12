class myArray extends Array {
	constructor() {
		super();
		this.history = [[]];
	}
	commit() {
		this.history.push(this.slice());
	}
	revert() {
		this.history.splice(this.history.length - 1,1);
	}
}

let x = new myArray();
let s = [1,2];
let s1 = new Array();
s1.push(3);

x.push(s);
console.log(x);	// [ [1,2],history:[[]] ]

x.commit();

console.log(x.history);	// [ [],myArray[ [1,2],history:[[]] ] ]
x.push(s1);
x.commit();

console.log(x);		// myArray [
				   // [ 1, 2 ],
				   // [ 3 ],
				   // history: [ [],
				   //   myArray [ [Array], history: [Array] ],
				   //   myArray [ [Array], [Array], history: [Array] ] ] ]	
console.log(x.history);	// [ [],
					    // myArray [ [ 1, 2 ], history: [ [] ] ],
					    // myArray [ [ 1, 2 ], [ 3 ], history: [ [] ] ] ]
x.revert();
console.log(x.history);	// [ [], myArray [ [ 1, 2 ], history: [ [] ] ] ]
