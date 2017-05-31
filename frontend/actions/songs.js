import { fetchSongs, postSong } from './APIUtil'

import jsmediatags from 'jsmediatags'

export const requestAllSongs = () => dispatch => (
  fetchSongs().then(songs => dispatch(receiveSongs(songs)))
)

export const createSong = path => dispatch => {
  console.log(`processing ${path}`);
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
      console.log(error);
    }
  });
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

export const addToPlaylist = song => ({
  type: "ADD_SONG_TO_PLAYLIST",
  payload: song
})
