import { fetchSongs, postSong } from './APIUtil'

// import { extractMetadataFrom } from './Util'

export const requestAllSongs = () => dispatch => (
  fetchSongs().then(songs => dispatch(receiveSongs(songs)))
)

export const createSong = path => dispatch => {
  console.log(path)
  // console.log(extractMetadataFrom(path))
  // debugger
  postSong({song: {url: path}}).then(song => dispatch(receiveSong(song)))
}

export const receiveSongs = songs => ({
  type: "RECEIVE_SONGS",
  payload: songs
})

export const receiveSong = song => ({
  type: "RECEIVE_SONG",
  payload: song
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
