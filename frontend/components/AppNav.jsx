import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import SearchResults from './SearchResults'

import { Link } from 'react-router-dom'

import { search, displaySearchResults, hideSearchResults } from '../actions/search'
import { startSong } from '../actions/songs'

const Search = ({ search, query, results, startSong, showResults, hideResultsOnDelay, resultsVisible, history }) => (
  <nav className="nav--search">
    <button className="button--back"
      onClick={history.goBack}>
      &lt;
    </button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))

// on search (livereload on keypress)
  // pop-down menu of matching terms
    // artists
    // albums
    // songs
    // "See All"

// Search reducer with the above keys - CHECK
  // (backend API route, controller, &c.)
// Search menu component - CHECK
// Search page component (for "See All")
  // uses Artists, Albums, & Songs?
