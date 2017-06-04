const currentPlaylist = {
  id: 1,
  name: "Demo Playlist",
  featured_song_ids: [],
}


export default (state = currentPlaylist, action) => {
  switch(action.type) {
    case "RECEIVE_PLAYLIST":
      return action.payload
    default:
      return state
  }
}
