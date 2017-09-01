const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
// Used to recieve messages from broweserwindows.
const ipcMain = electron.ipcMain
// Plugin to check if we are in "dev mode"
const isDev = require('electron-is-dev');





const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let loadingWindow

function createWindow () {


  // Create the browser window.
  loadingWindow = new BrowserWindow({width: 800, height: 600, show: false, frame: false})

  loadingWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'loading.html'),
    protocol: 'file:',
    slashes: 'true'
  }))

  loadingWindow.on('ready-to-show', () => {
    loadingWindow.show();
  })




}



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('loaded', (event, arg) => {
  loadingWindow.close()
  loadingWindow = null;
  mainWindow = new BrowserWindow({width: 800, height: 600, show: false, fullscreen: true})
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: 'true'
  }))

  mainWindow.on('ready-to-show', () => {

    loadingWindow.destroy()
    loadingWindow = null;
    mainWindow.show();
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
