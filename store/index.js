import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { defaultState } from './state'
import { ProspectsReducer } from './reducers'

const rootReducer = combineReducers({
  prospects: ProspectsReducer,
  form: formReducer
})

export const initStore = (initialState = defaultState) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
