import React from 'react'
import { connect } from 'react-redux'

import { requestAllArtists } from '../../actions/artists'

import ArtistsHeader from './ArtistsHeader'
import ArtistsListContainer from './ArtistsListContainer'



class Artists extends React.Component {
  render() {
    return (
      <article className="article--artists">
        <ArtistsHeader/>
        <ArtistsListContainer/>
      </article>
    )
  }

  componentDidMount() {
    this.props.requestAllArtists()
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestAllArtists: () => dispatch(requestAllArtists())
})

export default connect(null, mapDispatchToProps)(Artists)
