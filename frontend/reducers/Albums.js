const albums = {
  all: {},
  byId: []
}


export default (state = albums, action) => {
  switch(action.type) {
    case "RECEIVE_ALBUMS":
      return action.payload
    default:
      return state
  }
}
