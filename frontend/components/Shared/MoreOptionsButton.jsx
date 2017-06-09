import React from 'react'

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

  modalForeground() {
    if(this.state.modalIsOpen)
      return <foreground
        className="foreground--modal">
          <ul>
            <li>Add to Playlist</li>
            <li>playlist1</li>
            <li>playlist2</li>
            <li>playlist3</li>
          </ul>
        </foreground>
  }

  render() {
    return (
      <button
        onClick={this.openModal()}
        className="button--more-options">
        ...ola
        {this.modalBackground()}
        {this.modalForeground()}
      </button>
    )
  }
}

export default MoreOptionsButton

// pop-up menu with "Add to Playlist" option and list of Playlists

// should open a modal
  // the ul is the pop-up
  // the background covers everything else
    // fully transparent background
