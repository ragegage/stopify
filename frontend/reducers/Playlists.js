const artists = {
  all: {},
  byId: []
}


export default (state = artists, action) => {
  switch(action.type) {
    case "RECEIVE_PLAYLISTS":
      return action.payload
    default:
      return state
  }
}
