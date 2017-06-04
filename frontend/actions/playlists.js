import { fetchPlaylists, postPlaylist, fetchPlaylist } from './APIUtil'

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

export const requestPlaylist = (id) => dispatch => (
  fetchPlaylist(id).then(playlist => dispatch(receivePlaylist(playlist)))
)