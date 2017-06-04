import React from 'react'

export default ({ playlist }) => (
  <header className="header--playlist">
    <img src="" className="img--playlist"/>
    <h1 className="h1--playlist h1--main">{playlist.name}</h1>
    <p className="p--monthly-listens">2,684,768 Monthly Listens</p>
  </header>
)
