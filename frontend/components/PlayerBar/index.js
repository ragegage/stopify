import React from 'react'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'

import { pauseSong, playSong, updateProgress, updateLength } from '../../actions/songs'

// import SongsHeader from './SongsHeader'

const PlayerBar = ({ song, pauseSong, playSong, updateProgress, updateLength }) => {
  return (
  <footer className="footer--player">
    <aside className="aside--player-song-info">
      <img className="img--player-img" src={song.img_src}/>
      <div className="div--player-title">{song.title}</div>
    </aside>
    <section className="section--player-controls">
      <div className="div--player-controls">
        <button className="button--player-prev button--player-control">prev</button>
        <button
          onClick={song.playing ? pauseSong : playSong}
          className="button--player-pause button--player-control">
          {song.playing ? "pause" : "play"}
        </button>
        <button className="button--player-next button--player-control">next</button>
        <ReactPlayer
          width="0"
          height="0"
          playing={song.playing}
          volume={song.volume || 0.3}
          onProgress={updateProgress}
          url={song.url}/>
      </div>
      <div className="div--player-progress-bar-container">
        <p className="p--player-current-time">{parseInt(song.progress)}</p>
        <div
          style={{width: `${song.progress * 200}px`}}
          className="div--player-progress-bar"></div>
        <p className="p--player-total-time">{song.length}</p>
      </div>
    </section>
    <aside className="aside--player-other-controls">
      <button className="button-player-add-to-queue"></button>
      <div className="div-player-volume-bar"></div>
    </aside>
  </footer>
)}

const mapStateToProps = ({ currentlyPlaying }) => ({
  song: currentlyPlaying
})

const mapDispatchToProps = (dispatch) => ({
  pauseSong: () => dispatch(pauseSong()),
  playSong: () => dispatch(playSong()),
  updateProgress: ({played}) => dispatch(updateProgress(played)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerBar)

// ReactPlayer react-player docs here: https://www.npmjs.com/package/react-player
