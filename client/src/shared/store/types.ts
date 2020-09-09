
export type ErrorsType = string[]



export const APOLLO_FETCH_START = 'APOLLO_FETCH_START';
export type ApolloFetchStartAction = {
  type: typeof APOLLO_FETCH_START
}

export const APOLLO_FETCH_SUCCESS = 'APOLLO_FETCH_SUCCESS';
export type ApolloFetchSuccessAction = {
  type: typeof APOLLO_FETCH_SUCCESS
}

export const APOLLO_FETCH_FAILURE = 'APOLLO_FETCH_FAILURE';
export type ApolloFetchFailureAction = {
  type: typeof APOLLO_FETCH_FAILURE,
  error: true,
  payload: string
}

export const CLEAR_GLOBAL_ERROR = 'CLEAR_GLOBAL_ERROR'
export type ClearGlobalErrorAction = {
  type: typeof CLEAR_GLOBAL_ERROR
}

export const SET_USER = 'SET_USER'
export type SetUserAction = {
  type: typeof SET_USER
  payload: string
}

export const LOGOUT = 'LOGOUT';
export type LogoutAction = {
  type: typeof LOGOUT
}

export type GlobalActionsType = 
  ApolloFetchStartAction |
  ApolloFetchSuccessAction |
  ApolloFetchFailureAction |
  ClearGlobalErrorAction |
  SetUserAction |
  LogoutAction

export type GrobalCreatorsType = () => GlobalActionsType