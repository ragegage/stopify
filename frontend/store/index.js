import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import RootReducer from '../reducers'

import playlistMiddleware from './playlist'

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, playlistMiddleware)
  )
)

export default configureStore
