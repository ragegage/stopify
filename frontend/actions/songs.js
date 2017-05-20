import { fetchSongs } from './APIUtil'

export const requestAllSongs = () => dispatch => (
  fetchSongs().then(songs => dispatch(receiveSongs(songs)))
)

export const receiveSongs = (songs) => ({
  type: "RECEIVE_SONGS",
  payload: songs
})
