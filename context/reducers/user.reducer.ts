import { Action, UserOperations } from '../../types/action'
import { GlobalState } from '../../types/state'
import { UserCookie } from '../../types/user'

export default (state: GlobalState, action: Action): GlobalState => {
  switch (action.operation) {
    case UserOperations.SET_USER: return setUser(state, action.payload)
    default: return { ...state }
  }
}

const setUser = (state: GlobalState, payload: UserCookie): GlobalState => {
  return {
    ...state,
    user: {
      isLoggedIn: true,
      id: payload.id
    }
  }
}