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

  handleDrag(loc, leftSide, rightSide) {
    if(loc) {
      let vol = (loc - leftSide) / rightSide
      if (vol < 0) {
        vol = 0
      }
      if (vol > 1)
        vol = 1
      this.setState({
        volume: vol
      })
    }
  }

  handleChangeComplete() {
    return () => this.props.updateVolume(this.state.volume)
  }

  render() {
    const { volume } = this.state
    return (
      <div className="div--volume-bar-bg">
        <div
          draggable="true"
          onDrag={e => this.handleDrag(e.clientX,
                         e.target.parentElement.offsetLeft,
                         e.target.parentElement.clientWidth)
          }
          onDragEnd={this.handleChangeComplete()}
          className="div--volume-bar-handle"
          style={{left: `calc(${volume * 100}% - 7.5px)`}}
          >
        </div>
        <div
          style={{width: `${volume * 100}%`}}
          className="div--volume-bar-fg">
        </div>
      </div>
    )
  }
}

export default VolumeBar
