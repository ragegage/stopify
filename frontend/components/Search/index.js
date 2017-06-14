import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { requestFullSearchResults } from '../../actions/search'
import { startSong, addToQueue } from '../../actions/songs'


class Search extends React.Component {
  render() {
    return (
      <article className="article--search">
        <header className="header--search header--main-content">
          <img src="" className="img--search img--main-content"/>
          <h1 className="h1--search h1--main">
            Search Results
          </h1>
        </header>
        <section className="section--full-search-results">
          <ul className="ul--full-search-results">
            <li className="li--full-search-results-group">
              <ul className="ul--full-search-results-group">
                {
                  Object.values(this.props.results.songs).length > 0 ?
                    <li
                      className="li--full-search-result-header">
                      Songs
                    </li> : ''
                }
                {
                  Object.values(this.props.results.songs).map(song => (
                    <li
                      className="li--full-search-result li--full-song-result"
                      key={song.id}
                      onClick={this.props.startSong(song)}>
                      {song.title}
                      <button
                        className="button--add-to-queue"
                        onClick={this.props.addToQueue(song)}>
                        Add To Queue
                      </button>
                    </li>
                  ))
                }
              </ul>
            </li>
            <li className="li--full-search-results-group">
              <ul className="ul--full-search-results-group">
                {Object.values(this.props.results.artists).length > 0 ? <li className="li--full-search-result-header">Artists</li> : ''}
                {Object.values(this.props.results.artists).map(artist => (
                  <li className="li--full-search-result li--full-artist-result"
                    key={artist.id}>
                    <Link
                      className="a--full-search-result"
                      to={`/artist/${artist.id}`}
                      >
                      {artist.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="li--full-search-results-group">
              <ul className="ul--full-search-results-group">
                {Object.values(this.props.results.albums).length > 0 ? <li className="li--full-search-result-header">Albums</li> : ''}
                {Object.values(this.props.results.albums).map(album => (
                  <li className="li--full-search-result li--full-album-result" key={album.id}>
                    <Link
                      className="a--full-search-result"
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
  results: search.fullResults
})

const mapDispatchToProps = (dispatch) => ({
  requestFullSearchResults: (query) => dispatch(requestFullSearchResults(query)),
  startSong: song => () => dispatch(startSong(song)),
  addToQueue: song => (e) => {
    e.stopPropagation()
    dispatch(addToQueue(song))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
