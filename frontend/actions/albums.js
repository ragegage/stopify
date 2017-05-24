import { fetchAlbums, fetchAlbum } from './APIUtil'

export const requestAllAlbums = () => dispatch => (
  fetchAlbums().then(albums => dispatch(receiveAlbums(albums)))
)

export const receiveAlbums = (albums) => ({
  type: "RECEIVE_ALBUMS",
  payload: albums
})

export const requestAlbum = (id) => dispatch => (
  fetchAlbum(id).then(album => dispatch(receiveAlbum(album)))
)

export const receiveAlbum = (album) => ({
  type: "RECEIVE_ALBUM",
  payload: album
})
