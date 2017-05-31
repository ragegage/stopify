import React from 'react'

import { Link } from 'react-router-dom'

export default ({ results, startSong }) => (
  <ul className="ul--search-results">
    <li className="li--search-results-group">
      <ul className="ul--search-results-group">
        <li className="li--search-result-header">Songs</li>
        {Object.values(results.songs).map(song => (
          <li className="li--search-result li--song-result" key={song.id} onClick={startSong(song)}>
            {song.title}
          </li>
        ))}
      </ul>
    </li>
    <li className="li--search-results-group">
      <ul className="ul--search-results-group">
        <li className="li--search-result-header">Artists</li>
        {Object.values(results.artists).map(artist => (
          <li className="li--search-result li--artist-result" key={artist.id}>
            <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
          </li>
        ))}
      </ul>
    </li>
    <li className="li--search-results-group">
      <ul className="ul--search-results-group">
        <li className="li--search-result-header">Albums</li>
        {Object.values(results.albums).map(album => (
          <li className="li--search-result li--album-result" key={album.id}>
            <Link to={`/album/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </li>
  </ul>
)
