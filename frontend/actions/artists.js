import { fetchArtists, fetchArtist } from './APIUtil'
import { receiveSongs } from './songs'

export const requestAllArtists = () => dispatch => (
  fetchArtists().then(artists => dispatch(receiveArtists(artists)))
)

export const receiveArtists = (artists) => ({
  type: "RECEIVE_ARTISTS",
  payload: artists
})

export const requestArtist = (id) => dispatch => (
  fetchArtist(id).then(res => {
    dispatch(receiveArtist(res.artist))
    dispatch(receiveSongs(res.songs))
  })
)

export const receiveArtist = (artist) => ({
  type: "RECEIVE_ARTIST",
  payload: artist
})
