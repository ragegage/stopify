import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import configureStore from './store'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main")
  const store = configureStore()
  window.store = store
  ReactDOM.render(<Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>, main)
})
