import { useQuery } from "@apollo/react-hooks"
import { useApolloWithReducer } from "shared/hooks/useApolloWithReducer"
//gql query
import { getAllPosts } from "./gql/getAllPostsQuery"
//types
import { GetAllPostQuerry, GetAllPostQuerry_getAllPosts } from "./gql/__generated__/GetAllPostQuerry"

type GetAllPostsQuerryType = {
  loading: boolean,
  posts: GetAllPostQuerry_getAllPosts[],
  refetch: () => void
}

export const useGetAllPostsQuery = (): GetAllPostsQuerryType => {
  const queryData = useQuery<GetAllPostQuerry>(getAllPosts)
  const { loading, data } = useApolloWithReducer(queryData)
  
  
  
  return {
    loading,
    posts: data?.getAllPosts || [],
    refetch: queryData.refetch
  }
}