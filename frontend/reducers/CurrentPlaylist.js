const currentPlaylist = {
  id: 1,
  name: "Demo Playlist",
  featured_song_ids: [],
}


export default (state = currentPlaylist, action) => {
  switch(action.type) {
    case "RECEIVE_PLAYLIST":
      return action.payload
    case "REMOVE_SONG_FROM_PLAYLIST":
      return {
        ...state,
        featured_song_ids: state.featured_song_ids.filter(id => (
          id !== action.payload.song_id
        ))
      }
    default:
      return state
  }
}
