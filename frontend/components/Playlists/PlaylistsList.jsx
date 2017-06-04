import React from 'react'
import { Link } from 'react-router-dom'

export default ({ playlists }) => (
  <section className="section--playlists-list">
    <h2 className="h2--playlists-list h2--main">Popular</h2>
    <ul className="ul--playlists-list ul--block-list">
      {
        playlists.map(playlist => (
          <li
            key={playlist.id}
            className="li--playlists-list li--block-list">
            <Link
              className="a--playlist-name-in-list"
              to={`/playlist/${playlist.id}`}>
              {playlist.name}
            </Link>
          </li>
        ))
      }
    </ul>
  </section>
)
