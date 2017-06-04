import { connect } from 'react-redux'

import PlaylistsList from './PlaylistsList'
import { byId } from '../Shared/Selector'

const mapStateToProps = ({ playlists }) => {
  console.log(playlists);
  return ({
  playlists: byId(playlists)
})}

export default connect(mapStateToProps, null)(PlaylistsList)
