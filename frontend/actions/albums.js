import { fetchAlbums } from './APIUtil'

export const requestAllAlbums = () => dispatch => (
  fetchAlbums().then(albums => dispatch(receiveAlbums(albums)))
)

export const receiveAlbums = (albums) => ({
  type: "RECEIVE_ALBUMS",
  payload: albums
})
