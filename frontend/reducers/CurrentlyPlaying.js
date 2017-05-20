const currentlyPlaying = {
  // id: 1,
  // title: "Backseat Freestyle",
  // artist: "Kendrick Lamar",
  // length: 257,
  // playing: true,
  // volume: 0.8
  // progress: 0
}

export default (state = currentlyPlaying, action) => {
  console.log(action);
  let ns
  switch(action.type) {
    case "START_SONG":
      ns = Object.assign({}, action.payload)
      ns.playing = true
      return ns
    case "PAUSE_SONG":
      ns = Object.assign({}, state)
      ns.playing = false
      return ns
    case "PLAY_SONG":
      ns = Object.assign({}, state)
      ns.playing = true
      return ns
    case "UPDATE_PROGRESS":
      ns = Object.assign({}, state)
      ns.progress = action.payload
      return ns
    case "UPDATE_LENGTH":
      ns = Object.assign({}, state)
      ns.length = action.payload
      return ns
    default:
      return state
  }
}
