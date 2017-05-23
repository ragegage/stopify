import React from 'react'
import { Link } from 'react-router-dom'

export default ({ artists }) => (
  <section className="section--artists-list">
    <h2 className="h2--artists-list h2--main">Popular</h2>
    <ul className="ul--artists-list ul--block-list">
      {
        artists.map(artist => (
          <li className="li--artists-list li--block-list">
            <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
          </li>
        ))
      }
    </ul>
  </section>
)
