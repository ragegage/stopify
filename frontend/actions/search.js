import { searchAPI } from './APIUtil'

export const search = (query) => dispatch => {
  dispatch(receiveSearchQuery(query))
  return searchAPI(query).then(results => (
    dispatch(receiveSearchResults(results))
  ))
}

export const receiveSearchResults = (results) => ({
  type: "RECEIVE_SEARCH_RESULTS",
  payload: results
})

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
