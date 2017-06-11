const currentQueue = []

export default (state = currentQueue, action) => {
  switch(action.type) {
    case "ADD_SONG_TO_QUEUE":
      return [...state, action.payload.song.id]
    case "NEXT_SONG":
      return state.slice(1, state.length)
    default:
      return state
  }
}
