import { GlobalState } from '../types/state'

const initialState: GlobalState = {
  user: {
    isLoggedIn: false,
    id: 0,
    points: 0,
    experience: 0
  }
}

export default initialState