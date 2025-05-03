// src/main.ts
import { app, BrowserWindow, screen } from "electron";
import * as path from "path";

function createWindow() {
  const { width: screenW, height: screenH } = screen.getPrimaryDisplay().workAreaSize;
  const winW = 280;
  const winH = 220;
  const x = screenW - winW;
  const y = 0;

  const win = new BrowserWindow({
    width: winW,
    height: winH,
    x, y,
    useContentSize: true,
    alwaysOnTop: true,
    resizable: false,
    backgroundColor: "#efefef",

    frame: false,
    titleBarStyle: "hiddenInset",
    trafficLightPosition: { x: 12, y: 12 },

    hasShadow: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, '../../public/index.html'));
}

app.whenReady().then(createWindow);
