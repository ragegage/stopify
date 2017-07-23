import { fetchPlaylists, postPlaylist, fetchPlaylist } from './APIUtil'
import { receiveSongs, nextSong } from './songs'
import { shuffle } from '../util'

export const requestAllPlaylists = () => dispatch => (
  fetchPlaylists().then(
    playlists => dispatch(receivePlaylists(playlists))
  )
)

export const createPlaylist = playlistName => dispatch => {
  console.log(playlistName);
  postPlaylist({
    playlist: {
      name: playlistName
    }
  }).then(playlist => dispatch(receivePlaylist(playlist)))
}

export const receivePlaylists = playlists => ({
  type: "RECEIVE_PLAYLISTS",
  payload: playlists
})

export const receivePlaylist = playlist => ({
  type: "RECEIVE_PLAYLIST",
  payload: playlist
})

export const requestPlaylist = id => dispatch => (
  fetchPlaylist(id).then(res => {
    dispatch(receivePlaylist(res.playlist))
    dispatch(receiveSongs(res.songs))
  })
)

export const playPlaylist = playlist => dispatch => {
  dispatch(setPlaylistAsCurrentQueue(playlist))
  dispatch(nextSong())
}

export const setPlaylistAsCurrentQueue = playlist => ({
  type: "PLAY_PLAYLIST",
  payload: playlist.featured_song_ids
})

export const shufflePlaylist = playlist => dispatch => {
  dispatch(shufflePlaylistAsCurrentQueue(playlist))
  dispatch(nextSong())
}

export const shufflePlaylistAsCurrentQueue = playlist => ({
  type: "PLAY_PLAYLIST",
  payload: shuffle(playlist.featured_song_ids.slice())
})
