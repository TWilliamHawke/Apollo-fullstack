import { useLazyQuery } from "@apollo/react-hooks";
import { useEffect } from "react";
import { useApolloWithReducer } from "shared/hooks/useApolloWithReducer";
//gql query
import { getAllPosts } from './gql/getAllPostsQuery';
//types
import { GetAllPostQuerry } from "./gql/__generated__/GetAllPostQuerry";

type GetNewPostQuerry = {
  loading: boolean
}

export const useGetNewPostQuerry = (): GetNewPostQuerry => {
  const [ getNewPost, queryData ] = useLazyQuery<GetAllPostQuerry>(getAllPosts);
  const { loading } = useApolloWithReducer(queryData);

  useEffect(() => {
    getNewPost()
  }, [getNewPost])

  return {
    loading
  }
}