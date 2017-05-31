import React from 'react'

export default ({ songs, startSong, addToPlaylist }) => (
  <section className="section--song-list">
    <h2 className="h2--song-list h2--main">Popular</h2>
    <ul className="ul--song-list">
      {
        songs.map(song => (
          <li
            key={song.id}
            onClick={startSong(song)}
            onContextMenu={() => console.log("right click!")}
            className="li--song-list">
            {song.title}
            <button
              className="button--add-to-queue"
              onClick={addToPlaylist(song)}>
              Add To Queue
            </button>
          </li>
        ))
      }
    </ul>
  </section>
)
