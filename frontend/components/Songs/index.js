import React from 'react'

import SongsHeader from './SongsHeader'
import SongsListContainer from '../Shared/SongsListContainer'

export default () => (
  <article className="article--songs">
    <SongsHeader/>
    <SongsListContainer/>
  </article>
)
