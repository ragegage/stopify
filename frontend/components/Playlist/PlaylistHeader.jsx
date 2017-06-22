import React from 'react'

export default ({ playlist, playPlaylist, shufflePlaylist }) => (
  <header className="header--playlist header--main-content">
    <img src="" className="img--playlist img--main-content"/>
    <h1 className="h1--playlist h1--main">{playlist.name}</h1>
    <button
      onClick={playPlaylist(playlist)}
      className="button--play-playlist">Play</button>
    <button
      onClick={shufflePlaylist(playlist)}
      className="button--shuffle-playlist">Shuffle</button>
    <p className="p--monthly-listens">2,684,768 Monthly Listens</p>
  </header>
)
