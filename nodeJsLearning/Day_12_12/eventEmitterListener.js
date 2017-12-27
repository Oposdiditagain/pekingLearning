var events = require('events');

var emitter = new events.EventEmitter(); // 继承buff 

var listener1 = function listener1(){
	console.log('listener1 connected');
}
var listener2 = function listener2(){
	console.log('listener2 connected');
}

emitter.addListener('connection',listener1);
emitter.on('connection',listener2);

console.log('num of Listener: ' + require('events').EventEmitter.listenerCount(emitter,'connection'));

emitter.emit('connection');

emitter.removeListener('connection',listener1);
console.log('listener1 is off');

emitter.emit('connection');


console.log('num of Listener: ' + require('events').EventEmitter.listenerCount(emitter,'connection'))


console.log('good job');