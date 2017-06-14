import React, { Component } from 'react'
import Slider from 'react-rangeslider'


class VolumeBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      volume: props.volume
    }
  }

  handleChange() {
    return e => (
      this.setState({
        volume: parseFloat(e.target.value)
      }, this.handleChangeComplete())
    )
  }

  handleChangeComplete() {
    return () => this.props.updateVolume(this.state.volume)
  }

  render() {
    const { volume } = this.state
    return (
      <input value={volume}
        type="number" step="0.01" min="0" max="10"
        onChange={this.handleChange()}
      />
    )
  }
}

export default VolumeBar
