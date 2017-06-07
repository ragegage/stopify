import React from 'react'
import { connect } from 'react-redux'

import { requestFullSearchResults } from '../../actions/search'

class Search extends React.Component {
  render() {
    return (
      <article class="article--search">
        <header class="header--search">
          <img src="" class="img--search"/>
          <h1 class="h1--search h1--main">
            Search Results
          </h1>
        </header>
        <section class="section--search-results">
          <ul className="ul--search-results">
            <li className="li--search-results-group">
              <ul className="ul--search-results-group">
                {Object.values(this.props.results.songs).length > 0 ? <li className="li--search-result-header">Songs</li> : ''}
                {Object.values(this.props.results.songs).map(song => (
                  <li className="li--search-result li--song-result" key={song.id} onClick={startSong(song)}>
                    {song.title}
                  </li>
                ))}
              </ul>
            </li>
            <li className="li--search-results-group">
              <ul className="ul--search-results-group">
                {Object.values(this.props.results.artists).length > 0 ? <li className="li--search-result-header">Artists</li> : ''}
                {Object.values(this.props.results.artists).map(artist => (
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
                {Object.values(this.props.results.albums).length > 0 ? <li className="li--search-result-header">Albums</li> : ''}
                {Object.values(this.props.results.albums).map(album => (
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
        </section>
      </article>
    )
  }

  componentDidMount() {
    this.props.requestFullSearchResults(this.props.query)
  }

  componentWillReceiveProps(newProps) {
    if(newProps.query !== this.props.query)
      this.props.requestFullSearchResults(newProps.query)
  }
}

const mapStateToProps = ({ search }) => ({
  query: search.query,
  results: search.results
})

const mapDispatchToProps = (dispatch) => ({
  requestFullSearchResults: (query) => dispatch(requestFullSearchResults(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
