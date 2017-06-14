import React from 'react'

export default ({ artist }) => (
  <header className="header--artist header--main-content">
    <img src="" className="img--artist img--main-content"/>
    <h1 className="h1--artist h1--main">{artist.name}</h1>
    {/**** removed until feature is implemented
      <p className="p--monthly-listens">2,684,768 Monthly Listens</p>
    */}
  </header>
)
