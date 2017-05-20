import React from 'react'

import ArtistHeader from './ArtistHeader'
import SongsListContainer from '../Shared/SongsListContainer'

export default () => (
  <article className="article--artist">
    <ArtistHeader/>
    <SongsListContainer/>
  </article>
)

// refactor to use featured song list
  // and list of albums
    // (each with their own song list)
