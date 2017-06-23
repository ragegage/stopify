const songs = {
  all: {},
  byId: []
}

export default (state = songs, action) => {
  switch(action.type) {
    case "RECEIVE_SONGS":
      return {
        all: {...state.all, ...action.payload.all},
        byId: Array.from(new Set(action.payload.byId.concat(state.byId)))
      }
    case "RECEIVE_SONG":
      return {
        all: {
          ...state.all,
          [action.payload.id]: action.payload
        },
        byId: [...state.byId, action.payload.id]
      }
    case "RECEIVE_FULL_SEARCH_RESULTS":
    case "RECEIVE_SEARCH_RESULTS":
      let ns = {
        all: {
          ...state.all
        },
        byId: new Set(state.byId)
      }
      action.payload.songs.forEach(song => {
        ns.byId.add(song.id)
        ns.all[song.id] = song
      })
      return {
        all: ns.all,
        byId: [...ns.byId]
      }
    default:
      return state
  }
}
