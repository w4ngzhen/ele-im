import {app, BrowserWindow, Menu} from 'electron';
import io from 'socket.io-client';

const log = require('electron-log');

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\');
}

let mainWindow;
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`;

const ipcMain = require('electron').ipcMain;

let wsClient;
let url = 'ws://localhost:8080';

ipcMain.on('LoginCheckSuccess', (event, userInfo) => {
  log.log(`短链接登录校验通过，用户信息：${JSON.stringify(userInfo)}，开始准备构建WebSocket长连接校验`);

  wsClient = io.connect(url);

  wsClient.on('connect', () => {
    log.log('WebSocket完成建立，准备发送登录验证信息完成用户链接建立');
    wsClient.emit('LoginCheckForWebSocket', userInfo);
  });

  wsClient.on('LoginComplete', () => {
    log.log('登录完成');
    mainWindow.setSize(900, 600);
    mainWindow.setResizable(true);
    mainWindow.webContents.send('LoginComplete');
  });

  wsClient.on('close', () => {
    log.log('服务断开');
    mainWindow.webContents.send('ConnectClose');
  });

});

function createWindow() {
  Menu.setApplicationMenu(null);
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    width: 400,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });
  mainWindow.setResizable(false);

  mainWindow.loadURL(winURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
