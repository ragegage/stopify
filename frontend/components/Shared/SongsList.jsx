import React from 'react'

export default ({ songs }) => (
  <section className="section--song-list">
    <h2 className="h2--song-list h2--main">Popular</h2>
    <ul className="ul--song-list">
      {
        songs.map(song => (
          <li className="li--song-list">{song.title}</li>
        ))
      }
    </ul>
  </section>
)
