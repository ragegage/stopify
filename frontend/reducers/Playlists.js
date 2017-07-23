const playlists = {
  all: {},
  byId: []
}


export default (state = playlists, action) => {
  switch(action.type) {
    case "RECEIVE_PLAYLISTS":
      return action.payload
    case "RECEIVE_PLAYLIST":
      return {
        all: {...state.all, [action.payload.id]: action.payload},
        byId: [...state.byId, action.payload.id]
      }
    default:
      return state
  }
}
