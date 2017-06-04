import React from 'react'
import { Link } from 'react-router-dom'
import FileInput from 'react-file-input'
import { connect } from 'react-redux'

import fs from 'fs'

import { createSongs } from '../util'
import { createSong } from '../actions/songs'
import { createPlaylist } from '../actions/playlists'

class SideMenu extends React.Component {
  render() {
    return (
      <aside className="aside--sidebar">
        <ul className="ul--type-list">
          <li className="li--type"><Link to="/songs">Songs</Link></li>
          <li className="li--type"><Link to="/albums">Albums</Link></li>
          <li className="li--type"><Link to="/artists">Artists</Link></li>
          <li className="li--type"><Link to="/playlists">Playlists</Link></li>
          <li className="li--type">
            <form onSubmit={e => {
                e.preventDefault()
                this.props.createPlaylist(e.target[0].value)
              }}>
              <input type="text" placeholder="New Playlist"/>
              <input type="submit"/>
            </form>
          </li>
          <li><input
                ref={i => this._fileInput = i}
                onChange={createSongs(this.props.createSong)}
                type="file"
              />
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

const mapStateToProps = ({ currentlyPlaying }) => ({})

const mapDispatchToProps = (dispatch) => ({
  createSong: path => dispatch(createSong(path)),
  createPlaylist: name => dispatch(createPlaylist(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)


// <li className="li--type"><FileInput name="Local Files"
//                             accept=".mp3,.m4a"
//                             placeholder="Add Local Files"
//                             className="inputClass"
//                             onChange={e => createSong(e.target.files[0])}/></li>
