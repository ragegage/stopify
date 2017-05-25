const search = {
  query: '',
  results: {
    artists: {},
    albums: {},
    songs: {}
  }
}

export default (state = search, action) => {
  switch(action.type) {
    case "RECEIVE_SEARCH_QUERY":
      return {...state, query: action.payload}
    case "RECEIVE_SEARCH_RESULTS":
      return {...state, results: action.payload}
    default:
      return state
  }
}
