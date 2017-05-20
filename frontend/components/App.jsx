import React from 'react'

import SideMenu from './SideMenu'
import MainContent from './MainContent'
import PlayerBar from './PlayerBar'

export default () => (
  <main className="main--app">
    <SideMenu/>
    <MainContent/>
    <PlayerBar/>
  </main>
)
