import * as types from "./types";
import { ApolloError } from "@apollo/react-hooks";


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

export const FetchFailure = (payload: ApolloError): types.ApolloFetchFailureAction => {
  return {
    type: types.APOLLO_FETCH_FAILURE,
    error: true,
    payload
  }
}