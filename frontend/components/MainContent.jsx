import React from 'react'
import { Route } from 'react-router-dom'

import AppNav from './AppNav'

import Welcome from './Welcome'
import Artists from './Artists'
import Songs from './Songs'
import Albums from './Albums'
import Artist from './Artist'
import Album from './Album'

export default () => (
  <section className="section--content">
    <AppNav/>

    <Route exact path="/" component={Welcome}/>
    <Route path="/artists" component={Artists}/>
    <Route path="/songs" component={Songs}/>
    <Route path="/albums" component={Albums}/>
    <Route path="/artist" component={Artist}/>
    <Route path="/album" component={Album}/>
  </section>
)


// <Route exact path="/" component={Welcome}/>
// <Route path="/artists" component={Artists}/>
// <Route path="/songs" component={Songs}/>
// <Route path="/albums" component={Albums}/>
// <Route path="/artist" component={Artist}/>
// <Route path="/album" component={Album}/>
