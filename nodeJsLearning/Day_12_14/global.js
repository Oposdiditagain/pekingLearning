
// __filename : 全局变量：表示当前运行脚本文件的路径  注: 不一定和pwd 相同

console.log(__filename);

// __dirname : 表示当前执行脚本所在的目录

console.log(__dirname);

// setTimeout(fn,ms) : 全局函数  返回值：一个代表定时器的句柄

setTimeout(function(){
	console.log('this is setTimeout');
},1000);

// clearTimeout(td) td : 即创建setTimeout 时的句柄

function testSetTimeOut(times){
	var td = setTimeout(function(){
			console.log('this is for test setTimeout td');
			
			if(times < 3){
				times++;
				testSetTimeOut(times);
			}else{
				clearTimeout(td);
			}
		},500);
	

}

// testSetTimeOut(1);   可以看出 Node 的事件循环机制 先运行本函数后，再运行的上方的setTimeout()

// setInterval(fn,ms) : 全局函数

// setInterval(function(){
// 	console.log('this is setInterval');
// },1000);

function testSetInterval(){
	var td = setInterval(function(){
		console.log('this is test for setInterval td');
		
	},500);

	// clearInterval(td);           Node 里没有结束 interval() 的方法
}
// console.trace(message[,...])  ： 当前代码在堆栈中执行的调用路径，对测试函数运行很有帮助，
// 									只要给想测试的函数里加入 console.trace()
// console.time("获取数据");
// console.timeEnd("获取数据");       计算获取数据的事件 输入为: 获取数据: xxms;


// ************************************************************************************************
// process 是一个全局变量，即 global 对象的属性。
// 它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。
// 通常在你写本地命令行程序的时候，少不了要 和它打交道。下面将会介绍 process 对象的一些最常用的成员方法。

	// exit : 当进程准备退出时触发
	// beforeExit : 当 node 清空事件循环,并且没有其他安排时触发。 一般来说，当没有进程安排时 node 退出，但是 'beforeExit' 的监听器可以
	// 			    异步调用，从而 node 可以继续执行
	// uncaughtException : 当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作(打印堆栈中的跟踪信息)就不会发生
	// signal : 当进程收到信号时触发。信号列表详见标准的 POSIX 信号名， 如 SIGINT SIGUSR1 等

// eg : 
	process.on("exit",function(code){
		// 以下代码将不会执行

		setTimeout(function(){

			console.log("此代码不会执行");
		},0);

		console.log("进程结束码: " + code );
	});
	console.log("good job");

// * 退出状态码见 NodeJs 菜鸟教程 全局对象

// process 方法 nextTick(callback)//一旦当前事件循环结束，调用回调函数

// eg:
	// 输出当前目录
	console.log('当前目录 ： ' + process.cwd());

	// 输出当前版本
	console.log('当前版本 ： ' + process.version);

	// 输出内存使用情况
	console.log(process.memoryUsage());
