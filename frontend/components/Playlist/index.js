import React from 'react'
import { connect } from 'react-redux'

import { requestPlaylist, playPlaylist } from '../../actions/playlists'

import PlaylistHeader from './PlaylistHeader'
import SongsListContainer from '../Shared/SongsListContainer'



class Playlist extends React.Component {
  render() {
    return (
      <article className="article--playlist">
        <PlaylistHeader
          playlist={this.props.playlist}
          playPlaylist={this.props.playPlaylist}/>
        <SongsListContainer song_ids={this.props.playlist.featured_song_ids}/>
        <h2>Suggested songs for this playlist</h2>
        <p>Based on this playlist's songs, I'd recommend the following songs:</p>
        <ul>
          <li>song title <button>Add to playlist</button></li>
          <li>song title <button>Add to playlist</button></li>
          <li>song title <button>Add to playlist</button></li>
          <li>song title <button>Add to playlist</button></li>
        </ul>
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
  requestPlaylist: (id) => dispatch(requestPlaylist(id)),
  playPlaylist: (playlist) => () => dispatch(playPlaylist(playlist))
})

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
