import { QueryResult, MutationResult } from '@apollo/react-hooks';
import { useEffect, useContext } from 'react';
import { GlobalStateContext } from '../store/GlobalState';
import { fetchStart, fetchEnd, FetchFailure } from '../store/actions';

type ApolloWithReducer = <T>(querryData: QueryResult<T> | MutationResult<T>) => QueryResult<T> | MutationResult<T>

export const useApolloWithReducer: ApolloWithReducer = (queryData) => {
  const { error, loading, ...otherdata } = queryData
  const { dispatch } = useContext(GlobalStateContext)

  

  useEffect(() => {
    if(loading) {
      dispatch(fetchStart())
    } else {
      dispatch(fetchEnd())
    }
  }, [loading, dispatch])

  useEffect(() => {
    if(!error) return
    dispatch(FetchFailure(error.message));
  }, [error, dispatch])

  return {
    ...otherdata,
    error,
    loading
  }
}