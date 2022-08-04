import React, { createContext, useContext, useReducer } from 'react'
import { Action } from '../types/action'
import { GlobalState } from '../types/state'
import initialState from './state'
import reducer from './reducer'

const Context = createContext<{ globalState: GlobalState, dispatch: React.Dispatch<Action> }>({
  globalState: initialState,
  dispatch: () => null
})

export function GlobalStateProvider({ children }: { children: React.ReactNode }) {
  const [globalState, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ globalState, dispatch }}>{children}</Context.Provider>
  )
}

export function useGlobalStateContext() {
  return useContext(Context)
}