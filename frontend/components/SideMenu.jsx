import React from 'react'
import { Link } from 'react-router-dom'
import FileInput from 'react-file-input'
import { connect } from 'react-redux'

import fs from 'fs'

import { createSong } from '../actions/songs'

// pull out into utils file
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

const createSongs = createSong => e => {
  // this file input returns only the folder that the user selects,
    // not any of the files it contains
  const files = walk(e.target.files[0].path)
  debugger
  files.forEach(file => createSong(file))
}

class SideMenu extends React.Component {
  render() {
    return (
      <aside className="aside--sidebar">
        <ul className="ul--type-list">
          <li className="li--type"><Link to="/songs">Songs</Link></li>
          <li className="li--type"><Link to="/albums">Albums</Link></li>
          <li className="li--type"><Link to="/artists">Artists</Link></li>
          <li className="li--type">Playlists</li>
          <li><input
                ref={i => this._fileInput = i}
                onChange={createSongs(this.props.createSong)}
                type="file"
              />
          </li>
        </ul>
        <button className="button--new">New Playlist</button>
      </aside>
    )
  }

  componentDidMount () {
    this._fileInput.directory = true
    this._fileInput.webkitdirectory = true
    this._fileInput.multiple = true
  }
}

const mapStateToProps = ({ currentlyPlaying }) => ({})

const mapDispatchToProps = (dispatch) => ({
  createSong: path => dispatch(createSong(path)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)


// <li className="li--type"><FileInput name="Local Files"
//                             accept=".mp3,.m4a"
//                             placeholder="Add Local Files"
//                             className="inputClass"
//                             onChange={e => createSong(e.target.files[0])}/></li>
