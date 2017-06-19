import React from 'react'
import { connect } from 'react-redux'

import { createPlaylist } from '../../actions/playlists'

import PlaylistsHeader from './PlaylistsHeader'
import PlaylistsListContainer from './PlaylistsListContainer'

class Playlists extends React.Component {
  render() {
    return (
      <article className="article--playlists">
        <PlaylistsHeader/>
        <PlaylistsListContainer/>
      </article>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createPlaylist: name => dispatch(createPlaylist(name))
})

export default connect(null, mapDispatchToProps)(Playlists)
