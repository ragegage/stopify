// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

document.ondragover = document.ondrop = (ev) => {
  ev.preventDefault()
}

document.body.ondrop = (ev) => {
  console.log(ev.dataTransfer.files[0].path)
  ev.preventDefault()
}
