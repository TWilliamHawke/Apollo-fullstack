import { GlobalActionsType, APOLLO_FETCH_START, APOLLO_FETCH_FAILURE, APOLLO_FETCH_SUCCESS, CLEAR_GLOBAL_ERROR } from './types';

export type GlobalStateType = {
  loading: boolean
  errors?: string
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
    case CLEAR_GLOBAL_ERROR:
      return {
        ...state,
        errors: undefined
      }
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const x: never = action
  }

  return state
}
