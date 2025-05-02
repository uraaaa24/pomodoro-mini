// main.js
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 300,
    height: 200,
    alwaysOnTop: true,      // 常に最前面に表示
    resizable: false        // サイズ固定
  });
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

// macOS で Dock アイコンをクリックしたときの挙動
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
