import { Action, ActionType } from '../types/action'
import { GlobalState } from '../types/state'
import userReducer from './reducers/user.reducer'

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case ActionType.USER: return userReducer(state, action)
    default: return { ...state }
  }
}

export default reducer