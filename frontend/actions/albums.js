import { fetchAlbums, fetchAlbum } from './APIUtil'
import { receiveSongs } from './songs'

export const requestAllAlbums = () => dispatch => (
  fetchAlbums().then(albums => dispatch(receiveAlbums(albums)))
)

export const receiveAlbums = (albums) => ({
  type: "RECEIVE_ALBUMS",
  payload: albums
})

export const requestAlbum = (id) => dispatch => (
  fetchAlbum(id).then(res => {
    dispatch(receiveAlbum(res.album))
    dispatch(receiveSongs(res.songs))
  })
)

export const receiveAlbum = (album) => ({
  type: "RECEIVE_ALBUM",
  payload: album
})
