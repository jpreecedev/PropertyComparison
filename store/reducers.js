import { ProspectActions } from './actions'
import { defaultState } from './state'

import { recalculateFigures } from '../utils/finances'

export const ProspectsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ProspectActions.TRACK_PROSPECT:
      return {
        ...state,
        allProspects: state.allProspects.concat(recalculateFigures(action.payload))
      }
  }
  return state
}
