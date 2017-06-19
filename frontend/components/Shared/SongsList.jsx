import React from 'react'
import MoreOptionsButton from './MoreOptionsButton'

export default ({ songs, startSong, addToQueue }) => {
  return (
  <section className="section--song-list">
    <ul className="ul--song-list">
      {
        songs.map(song => (
          <li
            key={song.id}
            onClick={startSong(song)}
            onContextMenu={() => console.log("right click!")}
            className="li--song-list">
            <infogroup className="infogroup--song-info">
              <div className="div--song-list-title">{song.title}</div>
              <div className="div--song-list-artist">{song.artist}</div>
            </infogroup>
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
