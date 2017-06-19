import React from 'react'

export default ({ createPlaylist }) => (
  <header className="header--playlists header--main-content">
    <img src="" className="img--playlists img--main-content"/>
    <h1 className="h1--playlists h1--main">Playlists</h1>
    <form
      className="form--new-playlist"
      onSubmit={e => {
        e.preventDefault()
        createPlaylist(e.target[0].value)
      }}>
      <input
        type="text"
        placeholder="New Playlist"
        className="input--text-new-playlist" />
      <input
        type="submit"
        value="Create Playlist"
        className="input--submit-new-playlist" />
    </form>
  </header>
)
