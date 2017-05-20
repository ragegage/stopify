import { connect } from 'react-redux'

import SongsList from './SongsList'
import { byId } from './Selector'

const mapStateToProps = ({ songs }) => ({
  songs: byId(songs)
})

export default connect(mapStateToProps, null)(SongsList)
