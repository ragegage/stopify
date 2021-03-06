import React from 'react'
import { Route } from 'react-router-dom'

import AppNav from './AppNav'

import Welcome from './Welcome'
import Artists from './Artists'
import Songs from './Songs'
import Albums from './Albums'
import Artist from './Artist'
import Album from './Album'
import Playlists from './Playlists'
import Playlist from './Playlist'
import Search from './Search'

export default () => (
  <section className="section--content">
    <AppNav/>

    <Route exact path="/" component={Welcome}/>
    <Route path="/artists" component={Artists}/>
    <Route path="/songs" component={Songs}/>
    <Route path="/albums" component={Albums}/>
    <Route path="/artist/:id" component={Artist}/>
    <Route path="/album/:id" component={Album}/>
    <Route path="/playlists" component={Playlists}/>
    <Route path="/playlist/:id" component={Playlist}/>
    <Route path="/search/" component={Search}/>
  </section>
)
