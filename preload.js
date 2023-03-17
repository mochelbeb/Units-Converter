const {ipcRenderer , contextBridge , ipcMain} = require('electron')

const WINDOW_API = {
    exit: () => ipcRenderer.send("exit"),
    mini: () => ipcRenderer.send("mini"),
    info: () => ipcRenderer.send("info"),
    close: () => ipcRenderer.send("close"),
}


contextBridge.exposeInMainWorld("api",WINDOW_API);