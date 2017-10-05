var {ipcRenderer, remote} = require('electron')
var main = remote.require("./main.js")

import Funnies from './modules/funnies/funnies'
let funnies = new Funnies()

document.getElementById('loadingMessage').innerHTML = funnies.message()

setInterval(() => {
  document.getElementById('loadingMessage').innerHTML = funnies.message()
}, 4000)


setTimeout(() => {
  ipcRenderer.send('loaded');
}, 3000)
