const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
    //creates browser window
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true
    }
});

//Load HTML File
win.loadFile('index.html');

//Open Dev Tools (removable)
win.webContents.openDevTools();
}

//Create new main window when Electron is ready
app.whenReady().then(createWindow);

//Quite when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

//Activate app when icon clicked and no windows are open
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});