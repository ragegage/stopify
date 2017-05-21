import React from 'react'
import { Link } from 'react-router-dom'
import FileInput from 'react-file-input'
import { connect } from 'react-redux'

import { createSong } from '../actions/songs'

const SideMenu = ({ createSong }) => (
  <aside className="aside--sidebar">
    <ul className="ul--type-list">
      <li className="li--type">Browse</li>
      <li className="li--type"><Link to="/songs">Songs</Link></li>
      <li className="li--type"><Link to="/albums">Albums</Link></li>
      <li className="li--type"><Link to="/artists">Artists</Link></li>
      <li className="li--type">Playlists</li>
      <li className="li--type"><FileInput name="Local Files"
                                  accept=".mp3,.m4a"
                                  placeholder="Add Local Files"
                                  className="inputClass"
                                  onChange={e => createSong(e.target.files[0])}/></li>
    </ul>
    <button className="button--new">New Playlist</button>
  </aside>
)

const mapStateToProps = ({ currentlyPlaying }) => ({})

const mapDispatchToProps = (dispatch) => ({
  createSong: ({ path }) => dispatch(createSong(path)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
