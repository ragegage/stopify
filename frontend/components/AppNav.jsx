import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { search } from '../actions/search'
import { startSong } from '../actions/songs'

const Search = ({ search, query, results, startSong }) => (
  <nav className="nav--search">
    <input type="text"
      placeholder="Search"
      className="input--search"
      value={query}
      onChange={e => search(e.currentTarget.value)}
      />
    <ul>
      {Object.values(results.artists).map(artist => (
        <li key={artist.id}>
          <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
        </li>
      ))}
      {Object.values(results.albums).map(album => (
        <li key={album.id}>
          <Link to={`/album/${album.id}`}>{album.title}</Link>
        </li>
      ))}
      {Object.values(results.songs).map(song => (
        <li key={song.id} onClick={startSong(song)}>
          {song.title}
        </li>
      ))}
    </ul>
  </nav>
)

const mapStateToProps = ({ search = {} }) => ({
  query: search.query,
  results: search.results
})

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(search(query)),
  startSong: song => () => dispatch(startSong(song))
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
