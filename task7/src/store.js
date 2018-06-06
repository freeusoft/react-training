import nextConnectRedux from 'next-connect-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

export const initStore = (initialState) => {
  return createStore(rootReducer, initialState, compose(applyMiddleware(thunk)))
}

export const nextConnect = nextConnectRedux(initStore)