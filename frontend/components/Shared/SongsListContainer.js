import { connect } from 'react-redux'

import SongsList from './SongsList'
import { byId } from './Selector'

import { startSong, addToQueue } from '../../actions/songs'

const mapStateToProps = ({ songs }, ownProps) => ({
  songs: byId(songs, ownProps.song_ids)
})

const mapDispatchToProps = dispatch => ({
  startSong: song => () => dispatch(startSong(song)),
  addToQueue: song => (e) => {
    e.stopPropagation()
    dispatch(addToQueue(song))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SongsList)
