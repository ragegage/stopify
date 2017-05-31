import React from 'react'
import { connect } from 'react-redux'

import SearchResults from './Search/SearchResults'

import { Link } from 'react-router-dom'

import { search, displaySearchResults, hideSearchResults } from '../actions/search'
import { startSong } from '../actions/songs'

const Search = ({ search, query, results, startSong, showResults, hideResultsOnDelay, resultsVisible }) => (
  <nav className="nav--search">
    <input type="text"
      placeholder="Search"
      className="input--search"
      value={query}
      onChange={e => search(e.currentTarget.value)}
      onFocus={showResults}
      onBlur={hideResultsOnDelay}
      />
    {resultsVisible ? <SearchResults results={results} startSong={startSong}/> : ""}
  </nav>
)

const mapStateToProps = ({ search = {} }) => ({
  query: search.query,
  results: search.results,
  resultsVisible: search.resultsVisible
})

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(search(query)),
  startSong: song => () => dispatch(startSong(song)),
  showResults: () => dispatch(displaySearchResults()),
  hideResultsOnDelay: () => setTimeout(() => dispatch(hideSearchResults()), 500)
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

// on search (livereload on keypress)
  // pop-down menu of matching terms
    // artists
    // albums
    // songs
    // "See All"

// Search reducer with the above keys - CHECK
  // (backend API route, controller, &c.)
// Search menu component
// Search page component (for "See All")
  // uses Artists, Albums, & Songs?
