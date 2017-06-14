import React from 'react'
import {connect} from 'react-redux'

import { addToPlaylist } from '../../actions/songs'

class MoreOptionsButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
  }

  openModal() {
    return (e) => {
      e.stopPropagation()
      this.setState({ modalIsOpen: true })
    }
  }

  closeModal() {
    return (e) => {
      e.stopPropagation()
      this.setState({ modalIsOpen: false })
    }
  }

  modalBackground() {
    if(this.state.modalIsOpen)
      return <background
        className="background--modal"
        onClick={this.closeModal()}>
        </background>
  }

  handleAddToPlaylist(playlist) {
    this.props.addToPlaylist(
      this.props.song,
      playlist
    )
    this.closeModal()
  }

  modalForeground() {
    if(this.state.modalIsOpen)
      return <foreground
        className="foreground--modal">
          <ul>
            <li>Add to Playlist</li>
            {
              this.props.playlists.map(playlist => (
                <li
                  onClick={this.handleAddToPlaylist(
                    playlist
                  ).bind(this)}
                  >{playlist.name}</li>
              ))
            }
          </ul>
        </foreground>
  }

  render() {
    return (
      <button
        onClick={this.openModal()}
        className="button--more-options">
        ...
        {this.modalBackground()}
        {this.modalForeground()}
      </button>
    )
  }
}

const mapStateToProps = ({ playlists }) => ({
  playlists: playlists.byId.map(id => playlists.all[id])
})

const mapDispatchToProps = dispatch => ({
  addToPlaylist: (song, playlist) => (e) => {
    e.stopPropagation()
    dispatch(addToPlaylist(song, playlist))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MoreOptionsButton)

// pop-up menu with "Add to Playlist" option and list of Playlists

// should open a modal
  // the ul is the pop-up
  // the background covers everything else
    // fully transparent background
