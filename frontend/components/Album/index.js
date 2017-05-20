import React from 'react'

import AlbumHeader from './AlbumHeader'
import SongListContainer from '../Shared/SongsListContainer'

export default () => (
  <article className="article--album">
    <AlbumHeader/>
    <SongListContainer/>
  </article>
)
