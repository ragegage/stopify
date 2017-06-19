export default (state = {}, action) => {
  switch(action.type) {
    case "ADD_SONG_TO_QUEUE":
      return {...state, currentQueue: true}
    case "QUEUE_EFFECT_OVER":
      return {...state, currentQueue: false}
    case "SONG_ADDED_TO_PLAYLIST":
      return {...state, playlist: true}
    case "PLAYLIST_EFFECT_OVER":
      return {...state, playlist: false}
    default:
      return state
  }
}
