import React from 'react'
import { Link } from 'react-router-dom'

export default ({ albums }) => (
  <section className="section--albums-list">
    <h2 className="h2--albums-list h2--main">Popular</h2>
    <ul className="ul--albums-list ul--block-list">
      {
        albums.map(album => (
          <li className="li--albums-list li--block-list">
            <Link to="/album/maad">{album.title}</Link>
          </li>
        ))
      }
    </ul>
  </section>
)
