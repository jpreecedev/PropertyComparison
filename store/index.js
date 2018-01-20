import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { defaultState } from './state'
import { ProspectsReducer } from './reducers'

export const initStore = (initialState = defaultState) => {
  return createStore(ProspectsReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
