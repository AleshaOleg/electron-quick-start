// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { promiseIpcRenderer } = require('promisify-electron-ipc')

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    promiseIpcRenderer
      .send("greet-channel", button.textContent)
      .then(answer => console.log(answer)) // prints `Hello ${name}`
  })
})
