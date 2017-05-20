import { fetchArtists } from './APIUtil'

export const requestAllArtists = () => dispatch => (
  fetchArtists().then(artists => dispatch(receiveArtists(artists)))
)

export const receiveArtists = (artists) => ({
  type: "RECEIVE_ARTISTS",
  payload: artists
})
