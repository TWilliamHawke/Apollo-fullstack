import React, { createContext, FC, useReducer, Dispatch, ReactNode } from 'react';
import { reducer, defaultState, GlobalStateType } from './reducer';
import { GlobalActionsType } from './types';



export const GlobalStateContext = createContext<{
  state: GlobalStateType,
  dispatch: Dispatch<GlobalActionsType>
}>({state: defaultState, dispatch: () => {''}});

type PorpTypes = {
  children: ReactNode
}


export const GlobalStateProvider:FC<PorpTypes> = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, defaultState)
  
  return(
    <GlobalStateContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalStateContext.Provider>
  )
}
