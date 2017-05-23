import { connect } from 'react-redux'

import AlbumsList from './AlbumsList'
import { byId } from '../Shared/Selector'

const mapStateToProps = ({ albums }) => ({
  albums: byId(albums)
})

export default connect(mapStateToProps, null)(AlbumsList)
