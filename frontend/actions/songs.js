import { fetchSongs, postSong, postPlaylistSong, deletePlaylistSong, postPlay } from './APIUtil'

import jsmediatags from 'jsmediatags'

export const requestAllSongs = () => dispatch => (
  fetchSongs().then(songs => dispatch(receiveSongs(songs)))
)

export const createSong = path => dispatch => {
  console.log(`processing ${path}`)
  jsmediatags.read(path, { // gets metadata from mp3 file
    onSuccess: ({ tags }) => {
      postSong({
        song: {
          url: path,
          title: tags.title,
          album: tags.album,
          artist: tags.artist,
          track_num: tags.track,
          genre: tags.genre
        }
      }).then(song => dispatch(receiveSong(song)))
    },
    onError: (error) => {
      // doesn't seem to work :/
      console.log(error)
      if(error.info.path) {
        console.log('retrying in 3-10s!')
        setTimeout(() => dispatch(
          createSong(error.info.path)),
          Math.floor(Math.random() * 7000) + 3000
        )
      }
    }
  })
}

export const receiveSongs = songs => ({
  type: "RECEIVE_SONGS",
  payload: songs
})

export const receiveSong = song => ({
  type: "RECEIVE_SONG",
  payload: song
})

export const startSong = song => dispatch => {
  postPlay(song)
  dispatch({
    type: "START_SONG",
    payload: song
  })
}

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

export const updateVolume = volume => ({
  type: "UPDATE_VOLUME",
  payload: volume
})

export const addToQueue = song => dispatch => {
  setTimeout(() => dispatch(queueEffectOver()), 500)
  dispatch({
    type: "ADD_SONG_TO_QUEUE",
    payload: song
  })
}

export const queueEffectOver = () => ({
  type: "QUEUE_EFFECT_OVER"
})

export const addToPlaylist = (song, playlist) => dispatch => (
  postPlaylistSong(song, playlist)
    .then(res => {
      setTimeout(() => dispatch(playlistEffectOver()), 500)
      dispatch({
        type: "SONG_ADDED_TO_PLAYLIST"
      })
    })
    .fail(res => console.log(res))
)

export const playlistEffectOver = () => ({
  type: "PLAYLIST_EFFECT_OVER"
})

export const removeFromPlaylist = (songId, playlistId) => dispatch => (
  deletePlaylistSong(songId, playlistId)
    .then(res => dispatch(removeSongFromPlaylist(res)))
)

export const removeSongFromPlaylist = (payload) => ({
  type: "REMOVE_SONG_FROM_PLAYLIST",
  payload
})

export const nextSong = () => ({
  type: "NEXT_SONG"
})

export const prevSong = () => ({
  type: "PREV_SONG"
})
