const {app, dialog ,BrowserWindow , ipcMain } = require('electron')
const path = require('path')
let mainwindow;
let dialog_box_social;

app.disableHardwareAcceleration()
function createWindow () {
  const win = new BrowserWindow({
    transparent: true,
    frame: false,
    resizable:false,
    center : true,
    movable : false,
    title : "Converter",
    icon : "./assets/icons/arrow1_40529.ico",
    show: false,
    width: 1024,
    height: 650,
    autoHideMenuBar: true,
    //titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })

  win.loadFile('./assets/components/index.html')
  //win.webContents.openDevTools()
  win.once('ready-to-show',()=>{
    win.show();
  });
  return win;
}
function create_dialogBox() { 
  const dialogBox =new BrowserWindow({
    width:500,
    height:300,
    center : true,
    resizable :false,
    icon :"./assets/icons/arrow1_40529.ico",
    frame : false,
    transparent: true,
    autoHideMenuBar:true,
    title:"Social Media",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    },
  })
  dialogBox.loadFile('./assets/components/dialogBox.html');
  dialogBox.once('ready-to-show',()=>{
    dialogBox.show();
  })
  return dialogBox;
 }


ipcMain.on("close",()=>{
  dialog_box_social.close();
})
ipcMain.on("exit",()=>{
  app.quit();
})
ipcMain.on("mini",()=>{
  mainwindow.minimize();
})
ipcMain.on("info",()=>{
  dialog_box_social = create_dialogBox();
})

app.whenReady().then(() => {
  mainwindow = createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})