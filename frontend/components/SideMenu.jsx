import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <aside className="aside--sidebar">
    <ul className="ul--type-list">
      <li className="li--type">Browse</li>
      <li className="li--type"><Link to="/songs">Songs</Link></li>
      <li className="li--type"><Link to="/albums">Albums</Link></li>
      <li className="li--type"><Link to="/artists">Artists</Link></li>
      <li className="li--type">Playlists</li>
    </ul>
    <button className="button--new">New Playlist</button>
  </aside>
)
