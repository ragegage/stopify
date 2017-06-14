const currentlyPlaying = {
  volume: .5
}

export default (state = currentlyPlaying, action) => {
  switch(action.type) {
    case "START_SONG":
      return {...action.payload, playing: true, volume: state.volume}
    case "PAUSE_SONG":
      return {...state, playing: false}
    case "PLAY_SONG":
      return {...state, playing: true}
    case "UPDATE_PROGRESS":
      return {...state, progress: action.payload}
    case "UPDATE_LENGTH":
      return {...state, length: action.payload}
    case "UPDATE_VOLUME":
      return {...state, volume: action.payload}
    default:
      return state
  }
}
