import React from 'react'
import { connect } from 'react-redux'

import { requestAllPlaylists } from '../../actions/playlists'

import PlaylistsHeader from './PlaylistsHeader'
import PlaylistsListContainer from './PlaylistsListContainer'



class Playlists extends React.Component {
  render() {
    console.log('rendering playlists');
    return (
      <article className="article--playlists">
        <PlaylistsHeader/>
        <PlaylistsListContainer/>
      </article>
    )
  }

  componentDidMount() {
    this.props.requestAllPlaylists()
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestAllPlaylists: () => dispatch(requestAllPlaylists())
})

export default connect(null, mapDispatchToProps)(Playlists)
