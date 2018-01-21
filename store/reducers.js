import { ProspectActions } from './actions'
import { defaultState } from './state'

export const ProspectsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ProspectActions.TRACK_PROSPECT:
      return {
        ...state,
        allProspects: state.allProspects.concat(action.payload)
      }
  }
  return state
}
