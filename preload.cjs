// Preload script for secure Electron communication
// Exposes safe APIs to the renderer process

const { contextBridge } = require('electron');

// Expose protected methods that allow the renderer process
// to communicate with the main process
contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  versions: {
    node: process.versions.node,
    electron: process.versions.electron
  }
});
