const { contextBridge, ipcRenderer } = require('electron');
// Renderer only gets one narrow bridge; all authorization is enforced in main.js.
contextBridge.exposeInMainWorld('api', { call: (channel, payload) => ipcRenderer.invoke(channel, payload) });
