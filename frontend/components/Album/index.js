import React from 'react'
import { connect } from 'react-redux'

import { requestAlbum } from '../../actions/albums'

import AlbumHeader from './AlbumHeader'
import SongListContainer from '../Shared/SongsListContainer'



class Album extends React.Component {
  render() {
    console.log(this.props)
    return (
      <article className="article--album">
        <AlbumHeader album={this.props.album}/>
        <SongListContainer song_ids={this.props.album.song_ids}/>
      </article>
    )
  }

  componentDidMount() {
    this.props.requestAlbum(this.props.match.params.id)
  }

  componentWillReceiveProps(newProps) {
    if(newProps.match.params.id !== this.props.match.params.id)
      this.props.requestAlbum(newProps.match.params.id)
  }
}

const mapStateToProps = ({ currentAlbum }) => ({
  album: currentAlbum
})

const mapDispatchToProps = (dispatch) => ({
  requestAlbum: (id) => dispatch(requestAlbum(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Album)

// refactor to use featured song list
  // and list of albums
    // (each with their own song list)
