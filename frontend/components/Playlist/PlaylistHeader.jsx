import React from 'react'

export default ({ playlist, playPlaylist }) => (
  <header className="header--playlist">
    <img src="" className="img--playlist"/>
    <h1 className="h1--playlist h1--main">{playlist.name}</h1>
    <button
      onClick={playPlaylist(playlist)}
      className="button--play-playlist">Play</button>
    <p className="p--monthly-listens">2,684,768 Monthly Listens</p>
  </header>
)
