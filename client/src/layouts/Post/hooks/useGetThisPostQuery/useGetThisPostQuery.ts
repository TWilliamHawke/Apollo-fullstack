import { useQuery } from "@apollo/react-hooks"
import { useParams } from "react-router-dom"
import { useApolloWithReducer } from "shared/hooks/useApolloWithReducer"
import { getThisPostQuery } from "./gql/getThisPostQuery"
import { GetThisPost, GetThisPostVariables, GetThisPost_getPostById } from "./gql/__generated__/GetThisPost"
import { RouterParamsType } from 'shared/types/RouterTypes';

type GetThisPostQueryType = {
  loading: boolean,
  postData: GetThisPost_getPostById | null
}

export const useGetThisPostQuery = (): GetThisPostQueryType => {
  const { post } = useParams<RouterParamsType>()

  const queryData = useQuery<GetThisPost, GetThisPostVariables>(
    getThisPostQuery,
    { variables: { id: post } }
  )

  const { loading, data } = useApolloWithReducer<GetThisPost>(
    queryData
  )

  return {
    loading,
    postData: data?.getPostById || null,
  }
}