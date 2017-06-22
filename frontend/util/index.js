// import fs from 'fs'
import fs from 'graceful-fs'

const walk = function(dir) {
  // walks through a directory synchronously, collecting all the
    // file paths of the files within
  var results = []
  var list = fs.readdirSync(dir)
  list.forEach(function(file) {
      file = dir + '/' + file
      var stat = fs.statSync(file)
      if (stat && stat.isDirectory()) results = results.concat(walk(file))
      else results.push(file)
  })
  return results
}

export const createSongs = createSong => e => {
  // this file input returns only the folder that the user selects,
    // not any of the files it contains
  const files = walk(e.target.files[0].path)
  // debugger
  files.forEach(file => createSong(file))
}

export const shuffle = array => {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}
