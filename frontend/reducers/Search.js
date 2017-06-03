const search = {
  query: '',
  results: {
    artists: [],
    albums: [],
    songs: []
  },
  resultsVisible: false
}

export default (state = search, action) => {
  switch(action.type) {
    case "RECEIVE_SEARCH_QUERY":
      return {...state, query: action.payload}
    case "RECEIVE_SEARCH_RESULTS":
      return {...state, results: action.payload}
    case "DISPLAY_SEARCH_RESULTS":
      return {...state, resultsVisible: true}
    case "HIDE_SEARCH_RESULTS":
      return {...state, resultsVisible: false}
    default:
      return state
  }
}
