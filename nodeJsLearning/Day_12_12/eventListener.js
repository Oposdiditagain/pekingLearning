var events = require('events');

var eventEmitter = new events.EventEmitter();

// 	EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，
//  通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。
//  当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
	eventEmitter.on('fun',function(arg1,arg2){
		console.log('listener1 of ' + eventEmitter.listenerCount(eventEmitter,'fun'),arg1,arg2);
	});

	eventEmitter.on('fun',function(arg1,arg2){
		console.log('listener2 of ' + eventEmitter.listenerCount(eventEmitter,'fun'),arg1,arg2);
	});

	eventEmitter.emit('fun','param1','param2');