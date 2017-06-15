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
      return {
        all: {
          ...state.all,
          [action.payload.id]: action.payload
        },
        byId: [...state.byId, action.payload.id]
      }
    case "RECEIVE_SEARCH_RESULTS":
      let ns = {
        all: {
          ...state.all
        },
        byId: [...state.byId]
      }
      action.payload.songs.forEach(song => {
        ns.byId.push(song.id)
        ns.all[song.id] = song
      })
      return ns
    default:
      return state
  }
}
