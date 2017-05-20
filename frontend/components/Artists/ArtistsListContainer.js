import { connect } from 'react-redux'

import ArtistsList from './ArtistsList'
import { byId } from '../Shared/Selector'

const mapStateToProps = ({ artists }) => ({
  artists: byId(artists)
})

export default connect(mapStateToProps, null)(ArtistsList)
