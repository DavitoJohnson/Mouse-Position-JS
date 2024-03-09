const { app, BrowserWindow, screen } = require('electron');

function createWindow() {
    //gets primary display
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width, height } = primaryDisplay();
    //Create new browser window with screen dimensions
    const win = new BrowserWindow({
        width: width,
        height: height,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    //Load HTML File
    win.loadFile('index.html');

    //Open Dev Tools (removable)
    // win.webContents.openDevTools();

    //set window always on top
    win.setAlwaysOnTop(true);
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