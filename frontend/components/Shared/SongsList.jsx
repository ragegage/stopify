import React from 'react'
import MoreOptionsButton from './MoreOptionsButton'

export default ({ songs, startSong, addToQueue }) => {
  return (
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
            <buttongroup>
              <button
                className="button--add-to-queue"
                onClick={addToQueue(song)}>
                Add To Queue
              </button>
              <MoreOptionsButton song={song}/>
            </buttongroup>
          </li>
        ))
      }
    </ul>
  </section>
)}
