import React from 'react'

export default ({ album }) => (
  <header className="header--album">
    <img src="" className="img--album"/>
    <h1 className="h1--album h1--main">{album.title}</h1>
  </header>
)
