import { GlobalActionsType, APOLLO_FETCH_START, APOLLO_FETCH_FAILURE, APOLLO_FETCH_SUCCESS } from './types';
import { ApolloError } from '@apollo/react-hooks';

export type GlobalStateType = {
  loading: boolean
  errors?: ApolloError
}

export const defaultState: GlobalStateType = {
  loading: true,
}


export const reducer = (state: GlobalStateType, action: GlobalActionsType): GlobalStateType => {


  switch (action?.type) {
    case APOLLO_FETCH_START:
      return {
        ...state,
        loading: true
      }
    case APOLLO_FETCH_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case APOLLO_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload
      }
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const x: never = action
  }

  return state
}
