// src/main.ts
import { app, BrowserWindow, screen } from "electron";
import * as path from "path";

function createWindow() {
  const { width: screenW, height: screenH } = screen.getPrimaryDisplay().workAreaSize;
  const winW = 280;
  const winH = 220;
  const margin = 0;
  const x = screenW - winW;
  const y = margin;

  const win = new BrowserWindow({
    width: winW,
    height: winH,
    x, y,
    useContentSize: true,
    alwaysOnTop: true,
    resizable: false,
    backgroundColor: "#ffffff",

    titleBarStyle: "hiddenInset",
    trafficLightPosition: { x: 12, y: 12 },
    hasShadow: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "../dist/renderer/index.html"));
}

app.whenReady().then(createWindow);
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
