import React from 'react'
import { connect } from 'react-redux'

import { requestAllSongs } from '../../actions/songs'

import SongsHeader from './SongsHeader'
import SongsListContainer from '../Shared/SongsListContainer'



class Songs extends React.Component {
  render() {
    return (
      <article className="article--songs">
        <SongsHeader/>
        <SongsListContainer/>
      </article>
    )
  }

  componentDidMount() {
    this.props.requestAllSongs()
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestAllSongs: () => dispatch(requestAllSongs())
})

export default connect(null, mapDispatchToProps)(Songs)

// export default () => (
//   <article className="article--songs">
//     <SongsHeader/>
//     <SongsListContainer/>
//   </article>
// )
