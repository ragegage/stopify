import React from 'react'

import { Link } from 'react-router-dom'

// needs to be better styled
// should have a "new to Stopify? click here to add songs" button

export default () => (
  <article className="article--welcome">
    <h1 className="h1--main h1--welcome">Stopify: Your open-source Music Player</h1>

    <div className="div--welcome-buttons-container">
      <div className="div--welcome-button-container">
        <h2 className="h2--main h2--welcome">New to Stopify?</h2>

        <button className="button--welcome">
          Import Songs
        </button>
      </div>

      <div className="div--welcome-button-container">
        <h2 className="h2--main h2--welcome">Back again?</h2>

        <Link to="/songs" className="a--welcome">
          View Your Songs
        </Link>
      </div>
    </div>

    <p className="p--welcome">
    We created Stopify to democratize music library management.
    </p>
    <p className="p--welcome">
    No more having to use iTunes or Spotify or other proprietary
    software to manage your music.
    </p>
    <p className="p--welcome">
    Now you can manage your own music using an open-source, customizable
    music player.
    </p>


  </article>
)
