import React from 'react'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'

import { pauseSong, playSong, updateProgress, updateLength, updateVolume, nextSong, prevSong, startSong } from '../../actions/songs'

import VolumeBar from './VolumeBar'

// import SongsHeader from './SongsHeader'

const PlayerBar = ({ song, currentQueue, pauseSong, playSong, updateProgress, updateLength, updateVolume, nextSong, prevSong, startSong }) => {
  return (
  <footer className="footer--player">
    <aside className="aside--player-song-info">
      <img className="img--player-img" src={song.img_src}/>
      <div className="div--player-title">{song.title}</div>
    </aside>
    <section className="section--player-controls">
      <div className="div--player-controls">
        {/****
          removed until this feature is enabled
          <button
          onClick={prevSong}
          className="button--player-prev button--player-control">
          prev
        </button>
        */}
        <button
          onClick={song.playing ? pauseSong : playSong}
          className={
            `button--player-${song.playing ? "pause" : "play"}
            button--player-control`
          }>
        </button>
        <button
          onClick={nextSong}
          className="button--player-next button--player-control">
        </button>
        <ReactPlayer
          width="0"
          height="0"
          playing={song.playing}
          volume={song.volume}
          onProgress={updateProgress}
          onEnded={nextSong}
          url={song.url}/>
      </div>
      <div className="div--player-progress-bar-container">
        {/* set to display: none until fully implemented */}
        <p className="p--player-current-time">{parseInt(song.progress)}</p>
        <div
          style={{width: `${song.progress * 200}px`}}
          className="div--player-progress-bar"></div>
        <p className="p--player-total-time">{song.length}</p>
      </div>
    </section>
    <aside className="aside--player-other-controls">
      <button
        className="button--player-add-to-queue">
        <ul className="ul--current-queue">
          {
            currentQueue.map(queuedSong => (
              <li
                key={queuedSong.id}
                className="li--current-queue"
                onClick={startSong(queuedSong)}>
                {queuedSong.artist} - {queuedSong.title}
              </li>
            ))
          }
        </ul>
      </button>
      <VolumeBar volume={song.volume} updateVolume={updateVolume} />
    </aside>
  </footer>
)}

const mapStateToProps = ({ currentlyPlaying, currentQueue, songs }) => ({
  song: currentlyPlaying,
  currentQueue: currentQueue.map(songId => songs.all[songId])
})

const mapDispatchToProps = (dispatch) => ({
  pauseSong: () => dispatch(pauseSong()),
  playSong: () => dispatch(playSong()),
  updateProgress: ({played}) => dispatch(updateProgress(played)),
  updateVolume: (volume) => dispatch(updateVolume(volume)),
  nextSong: () => dispatch(nextSong()),
  prevSong: () => dispatch(prevSong()),
  startSong: (song) => () => dispatch(startSong(song)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerBar)

// ReactPlayer react-player docs here: https://www.npmjs.com/package/react-player
