import { fetchSongs } from './APIUtil'

export const requestAllSongs = () => dispatch => (
  fetchSongs().then(songs => dispatch(receiveSongs(songs)))
)

export const receiveSongs = songs => ({
  type: "RECEIVE_SONGS",
  payload: songs
})

export const startSong = song => ({
  type: "START_SONG",
  payload: song
})

export const pauseSong = () => ({
  type: "PAUSE_SONG"
})

export const playSong = () => ({
  type: "PLAY_SONG"
})

export const updateProgress = seconds => ({
  type: "UPDATE_PROGRESS",
  payload: seconds
})

export const updateLength = seconds => ({
  type: "UPDATE_LENGTH",
  payload: seconds
})
