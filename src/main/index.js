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

ipcMain.handle('LoginCheckSuccess', (event, loginUser) => {
  log.log(`短链接登录校验通过，用户信息：${JSON.stringify(loginUser)}，开始准备构建WebSocket长连接校验`);

  return new Promise((resolve, reject) => {
    wsClient = io.connect(url);

    wsClient.on('connect', () => {
      log.log('WebSocket完成建立，准备发送登录验证信息完成用户链接建立');
      wsClient.emit('LoginCheckForWebSocket', loginUser);
    });

    wsClient.on('LoginComplete', data => {
      if (data.code === 0) {
        log.debug('登录完成');
      } else if (data.code === 99) { // 登陆异常
        log.error(data);
      }
      return resolve(data);
    });

    wsClient.on('close', () => {
      log.log('服务断开');
      mainWindow.webContents.send('ConnectClose');
    });
  });

});

function createWindow() {
  Menu.setApplicationMenu(null);
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    frame: false, // 无边框
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
