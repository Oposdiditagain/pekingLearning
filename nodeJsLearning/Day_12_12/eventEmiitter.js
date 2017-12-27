// 引入模块

	var events = require('events');
	var eventsEmitter = new events.EventEmitter();

// 绑定事件处理程序
	// eventsEmitter.on('eventname',eventHandler);

// 触发事件

	// eventsEmitter.emit('eventname');


// eg
// 创建事件处理程序
var connectHandler = function connected(){
	console.log('Connected');

	eventsEmitter.emit('dataReceived');
}

	eventsEmitter.on('connection',connectHandler);

// 使用匿名函数绑定 dataReceived 事件

eventsEmitter.on('dataReceived',function(){
	console.log('Data Received')
})

eventsEmitter.emit('connection');

console.log('good job');
