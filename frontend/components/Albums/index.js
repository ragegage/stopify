import React from 'react'
import { connect } from 'react-redux'

import { requestAllAlbums } from '../../actions/albums'

import AlbumsHeader from './AlbumsHeader'
import AlbumsListContainer from './AlbumsListContainer'



class Albums extends React.Component {
  render() {
    return (
      <article className="article--albums">
        <AlbumsHeader/>
        <AlbumsListContainer/>
      </article>
    )
  }

  componentDidMount() {
    this.props.requestAllAlbums()
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestAllAlbums: () => dispatch(requestAllAlbums())
})

export default connect(null, mapDispatchToProps)(Albums)
