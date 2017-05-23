const artists = {
  all: {},
  byId: []
}


export default (state = artists, action) => {
  console.log(artists);
  switch(action.type) {
    case "RECEIVE_ARTISTS":
      return action.payload
    default:
      return state
  }
}
