import { QueryResult, MutationResult } from '@apollo/react-hooks';
import { useEffect, useContext } from 'react';
import { GlobalStateContext } from '../store/GlobalState';
import { fetchStart, fetchEnd } from '../store/actions';
import { useErrorHandler } from './useErrorHandler';

type ApolloHookResult<T> = QueryResult<T> | MutationResult<T>
type ApolloWithReducer = <T>(querryData: ApolloHookResult<T>) => ApolloHookResult<T>

export const useApolloWithReducer: ApolloWithReducer = (queryData) => {
  const { error, loading } = queryData
  const { dispatch, state } = useContext(GlobalStateContext)
  const { errorHandler } = useErrorHandler();
  

  useEffect(() => {
    if(loading) {
      dispatch(fetchStart())
    } else {
      dispatch(fetchEnd())
    }
  }, [loading, dispatch])

  useEffect(() => {
    if(!error) return
    errorHandler(error);
  }, [error, errorHandler])

  return {
    ...queryData,
    loading: state.loading
  }
}