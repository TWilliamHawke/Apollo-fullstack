import * as types from "./types";

export const fetchStart = (): types.ApolloFetchStartAction => {
  return {
    type: types.APOLLO_FETCH_START,
  }
}

export const fetchEnd = (): types.ApolloFetchSuccessAction => {
  return {
    type: types.APOLLO_FETCH_SUCCESS
  }
}

export const FetchFailure = (payload: string): types.ApolloFetchFailureAction => {
  return {
    type: types.APOLLO_FETCH_FAILURE,
    error: true,
    payload
  }
}

export const clearGlobalErrors = (): types.ClearGlobalErrorAction => {
  return {
    type: types.CLEAR_GLOBAL_ERROR
  }
}