const search = {
  query: '',
  results: {
    artists: [],
    albums: [],
    songs: []
  },
  fullResults: {
    artists: [],
    albums: [],
    songs: []
  },
  resultsVisible: false
}

export default (state = search, action) => {
  switch(action.type) {
    case "RECEIVE_SEARCH_QUERY":
      return {...state, query: action.payload, resultsVisible: true}
    case "RECEIVE_SEARCH_RESULTS":
      return {...state, results: action.payload}
    case "DISPLAY_SEARCH_RESULTS":
      if(state.query.length > 0)
        return {...state, resultsVisible: true}
      else return state
    case "HIDE_SEARCH_RESULTS":
      return {...state, resultsVisible: false}
    case "RECEIVE_FULL_SEARCH_RESULTS":
      return {...state, fullResults: action.payload}
    default:
      return state
  }
}
