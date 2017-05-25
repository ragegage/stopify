import React from 'react'
import { connect } from 'react-redux'

import { search } from '../actions/search'

const Search = ({ search, query, results }) => (
  <nav className="nav--search">
    <input type="text"
      placeholder="Search"
      className="input--search"
      value={query}
      onChange={e => search(e.currentTarget.value)}
      />
  </nav>
)

const mapStateToProps = ({ search = {} }) => ({
  query: search.query,
  results: search.results
})

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(search(query))
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
