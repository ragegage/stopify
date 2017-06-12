const songs = {
  all: {},
  byId: []
}

export default (state = songs, action) => {
  switch(action.type) {
    case "RECEIVE_SONGS":
      return {
        all: {...state.all, ...action.payload.all},
        byId: Array.from(new Set(state.byId.concat(action.payload.byId)))
      }
      // return action.payload
    case "RECEIVE_SONG":
      let ns = {all: {}, byId: []}
      state.byId.forEach(id => {
        ns.all[id] = Object.assign({}, state.all[id])
      })
      ns.byId = state.byId.map(id => id)
      ns.byId.push(action.payload.id)
      ns.all[action.payload.id] = action.payload
      return ns
    default:
      return state
  }
}
