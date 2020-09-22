import { QueryResult, MutationResult, SubscriptionResult } from '@apollo/react-hooks';
import { useContext, useEffect } from 'react';
import { fetchStart, fetchEnd } from '../store/actions';
import { useErrorHandler } from './useErrorHandler';
import { GlobalStateContext } from 'shared/store/GlobalState';

type ApolloHookResult = QueryResult | MutationResult | SubscriptionResult
type ApolloWithReducer = <T extends ApolloHookResult>(querryData: T) => T

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