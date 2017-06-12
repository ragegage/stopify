import { connect } from 'react-redux'

import PlaylistsList from './PlaylistsList'
import { byId } from '../Shared/Selector'

const mapStateToProps = ({ playlists }) => ({
  playlists: byId(playlists)
})

export default connect(mapStateToProps, null)(PlaylistsList)
