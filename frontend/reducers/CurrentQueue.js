const currentQueue = []

export default (state = currentQueue, action) => {
  switch(action.type) {
    case "ADD_SONG_TO_PLAYLIST":
      return [...state, action.payload]
    default:
      return state
  }
}
