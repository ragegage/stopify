import React from 'react'
import { connect } from 'react-redux'

import { requestArtist } from '../../actions/artists'

import ArtistHeader from './ArtistHeader'
import SongsListContainer from '../Shared/SongsListContainer'



class Artist extends React.Component {
  render() {
    return (
      <article className="article--artist">
        <ArtistHeader artist={this.props.artist}/>
        <SongsListContainer song_ids={this.props.artist.featured_song_ids}/>
      </article>
    )
  }

  componentDidMount() {
    this.props.requestArtist(this.props.match.params.id)
  }
}

const mapStateToProps = ({ currentArtist }) => ({
  artist: currentArtist
})

const mapDispatchToProps = (dispatch) => ({
  requestArtist: (id) => dispatch(requestArtist(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Artist)

// refactor to use featured song list
  // and list of albums
    // (each with their own song list)
