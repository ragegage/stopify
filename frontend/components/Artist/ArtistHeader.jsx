import React from 'react'

export default ({ artist }) => (
  <header className="header--artist">
    <img src="" className="img--artist"/>
    <h1 className="h1--artist h1--main">{artist.name}</h1>
    <p className="p--monthly-listens">2,684,768 Monthly Listens</p>
  </header>
)
