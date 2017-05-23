import { fetchArtists, fetchArtist } from './APIUtil'

export const requestAllArtists = () => dispatch => (
  fetchArtists().then(artists => dispatch(receiveArtists(artists)))
)

export const receiveArtists = (artists) => ({
  type: "RECEIVE_ARTISTS",
  payload: artists
})

export const requestArtist = (id) => dispatch => (
  fetchArtist(id).then(artist => dispatch(receiveArtist(artist)))
)

export const receiveArtist = (artist) => ({
  type: "RECEIVE_ARTIST",
  payload: artist
})
