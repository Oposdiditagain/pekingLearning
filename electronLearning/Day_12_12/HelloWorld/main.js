const electron = require('electron');

const app = electron.app;

const browserWindow = electron.BrowserWindow;

const path = require('path');

const url = require('url');

let mainWindow;

function createWindow(){
	mainWindow = new browserWindow({width: 800,height: 600});
	 // 加载应用的 index.html
	 // mainWindow.loadURL('file://' + __dirname + '/index.html');
	mainWindow.loadURL(url.format({
		pathname:path.join(__dirname,'index.html'),
		protocol:'file',
		slashes:true
	}));

	// 打开开发工具
	// mainWindow.webContents.openDevTools()

	mainWindow.on('closed',function(){


		mainWindow = null;
	})
}

app.on('ready',createWindow);

	// Quit when all windows are closed
app.on('window-all-closed',function(){

	if(process.platform !== 'darwin'){
		app.quit();
	}
});

app.on('activate',function(){
	if(mainWindow === null){
		createWindow();
	}
});