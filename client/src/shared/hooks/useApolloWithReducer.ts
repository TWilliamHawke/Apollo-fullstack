import { QueryResult } from '@apollo/react-hooks';
import { useEffect, useContext } from 'react';
import { GlobalStateContext } from '../store/GlobalState';
import { fetchStart, fetchEnd } from '../store/actions';

export const useApolloWithReducer = <T>(queryData: QueryResult<T>): QueryResult<T> => {
  const { error, loading, ...otherdata } = queryData
  const { dispatch, state } = useContext(GlobalStateContext)

  

  useEffect(() => {
    if(loading) {
      dispatch(fetchStart())
    } else {
      dispatch(fetchEnd())
    }
  }, [loading, dispatch])

  useEffect(() => {
    if(!error) return
    console.log(error);
  }, [error])

  return {
    ...otherdata,
    error: state.errors,
    loading
  }
}