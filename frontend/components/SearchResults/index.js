import React from 'react'

import { Link } from 'react-router-dom'

const sumOf = (results) => (
  Object.values(results.songs).length +
    Object.values(results.albums).length +
    Object.values(results.songs).length
)

export default ({ results, startSong }) => (
  <ul className="ul--search-results">
    <li className="li--search-results-group">
      {sumOf(results) > 0 ?
        <Link
          className="a--search-result"
          to={`/search`}
          >'See All Results...'</Link> : 'No results match :('}
    </li>
    <li className="li--search-results-group">
      <ul className="ul--search-results-group">
        {Object.values(results.songs).length > 0 ? <li className="li--search-result-header">Songs</li> : ''}
        {Object.values(results.songs).map(song => (
          <li className="li--search-result li--song-result" key={song.id} onClick={startSong(song)}>
            {song.title}
          </li>
        ))}
      </ul>
    </li>
    <li className="li--search-results-group">
      <ul className="ul--search-results-group">
        {Object.values(results.artists).length > 0 ? <li className="li--search-result-header">Artists</li> : ''}
        {Object.values(results.artists).map(artist => (
          <li className="li--search-result li--artist-result" key={artist.id}>
            <Link
              className="a--search-result"
              to={`/artist/${artist.id}`}
              >
              {artist.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
    <li className="li--search-results-group">
      <ul className="ul--search-results-group">
        {Object.values(results.albums).length > 0 ? <li className="li--search-result-header">Albums</li> : ''}
        {Object.values(results.albums).map(album => (
          <li className="li--search-result li--album-result" key={album.id}>
            <Link
              className="a--search-result"
              to={`/album/${album.id}`}
              >
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  </ul>
)
