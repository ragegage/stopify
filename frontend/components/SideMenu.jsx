import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import { ipcRenderer } from 'electron'
// let ipc = require('electron').ipcRenderer
// import ipc from 'ipc-renderer'
// console.log(ipc);
// import Electron from 'electron'

import { createSongs } from '../util'
import { createSong } from '../actions/songs'

class SideMenu extends React.Component {
  render() {
    return (
      <aside className="aside--sidebar">
        <ul className="ul--type-list">
          <li className="li--type"><Link to="/songs">Songs</Link></li>
          <li className="li--type"><Link to="/albums">Albums</Link></li>
          <li className="li--type"><Link to="/artists">Artists</Link></li>
          <li className="li--type">
            <Link
              className={
                this.props.playlistEffect ? 'a--playlist-effect' : ''
              }
              to="/playlists">
              Playlists
            </Link>
          </li>
          <li className="li--type">
            <label className="label--file-input">
              Add Files
              <input
                className="input--file-input"
                ref={i => this._fileInput = i}
                onChange={createSongs(this.props.createSong)}
                type="file"
              />
            </label>
          </li>
        </ul>
      </aside>
    )
  }

  componentDidMount () {
    this._fileInput.directory = true
    this._fileInput.webkitdirectory = true
    this._fileInput.multiple = true
  }
}

const mapStateToProps = ({ currentlyPlaying, effects }) => ({
  playlistEffect: effects.playlist
})

const mapDispatchToProps = (dispatch) => ({
  createSong: path => dispatch(createSong(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
