import React from 'react'

import { requestAllSongs } from '../../actions/songs'

const SongsHeader = ({ requestAllSongs }) => (
  <header className="header--songs header--main-content">
    <img src="" className="img--songs img--main-content"/>
    <h1 className="h1--songs h1--main">Songs</h1>
    <button onClick={requestAllSongs}>Another 100!</button>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  requestAllSongs: () => dispatch(requestAllSongs())
})

export default connect(null, mapDispatchToProps)(SongsHeader)
