import React from 'react'
import { connect } from 'react-redux'

import { requestPlaylist } from '../../actions/playlists'

import PlaylistHeader from './PlaylistHeader'
import SongsListContainer from '../Shared/SongsListContainer'



class Playlist extends React.Component {
  render() {
    return (
      <article className="article--playlist">
        <PlaylistHeader playlist={this.props.playlist}/>
        <SongsListContainer song_ids={this.props.playlist.featured_song_ids}/>
      </article>
    )
  }

  componentDidMount() {
    this.props.requestPlaylist(this.props.match.params.id)
  }

  componentWillReceiveProps(newProps) {
    if(newProps.match.params.id !== this.props.match.params.id)
      this.props.requestPlaylist(newProps.match.params.id)
  }
}

const mapStateToProps = ({ currentPlaylist }) => ({
  playlist: currentPlaylist
})

const mapDispatchToProps = (dispatch) => ({
  requestPlaylist: (id) => dispatch(requestPlaylist(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
