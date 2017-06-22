import { searchAPI, fullSearchAPI } from './APIUtil'

export const search = query => dispatch => {
  dispatch(receiveSearchQuery(query))
  if(query.length > 0)
    return searchAPI(query).then(results => (
      dispatch(receiveSearchResults(results))
    ))
  else
    return dispatch(hideSearchResults())
}

export const receiveSearchResults = (results) => {
  return ({
  type: "RECEIVE_SEARCH_RESULTS",
  payload: results
})}

export const receiveSearchQuery = (query) => ({
  type: "RECEIVE_SEARCH_QUERY",
  payload: query
})

export const displaySearchResults = () => ({
  type: "DISPLAY_SEARCH_RESULTS"
})

export const hideSearchResults = () => ({
  type: "HIDE_SEARCH_RESULTS"
})

export const requestFullSearchResults = query => dispatch => {
  if(query.length > 0)
    return fullSearchAPI(query).then(results => (
      dispatch(receiveFullSearchResults(results))
    ))
  else
    return dispatch(receiveFullSearchResults({
      artists: [],
      albums: [],
      songs: []
    }))

}

export const receiveFullSearchResults = (results) => ({
  type: "RECEIVE_FULL_SEARCH_RESULTS",
  payload: results
})
