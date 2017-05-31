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
    <ul className="ul--search-results">
      <li className="li--search-results-group">
        <ul className="ul--search-results-group">
        {Object.values(results.songs).map(song => (
          <li className="li--search-result li--song-result" key={song.id} onClick={startSong(song)}>
            {song.title}
          </li>
        ))}
        </ul>
      </li>
      <li className="li--search-results-group">
        <ul className="ul--search-results-group">
        {Object.values(results.artists).map(artist => (
          <li className="li--search-result li--artist-result" key={artist.id}>
            <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
          </li>
        ))}
        </ul>
      </li>
      <li className="li--search-results-group">
        <ul className="ul--search-results-group">
        {Object.values(results.albums).map(album => (
          <li className="li--search-result li--album-result" key={album.id}>
            <Link to={`/album/${album.id}`}>{album.title}</Link>
          </li>
        ))}
        </ul>
      </li>
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
