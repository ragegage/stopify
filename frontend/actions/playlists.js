import { fetchPlaylists, postPlaylist, fetchPlaylist } from './APIUtil'
import { receiveSongs, nextSong } from './songs'

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
  }).then(song => dispatch(receivePlaylist(song)))
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
