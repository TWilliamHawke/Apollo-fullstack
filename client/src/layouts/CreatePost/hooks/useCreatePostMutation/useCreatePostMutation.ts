import { ApolloError, useMutation } from "@apollo/react-hooks"
import { createPostMutation } from "./gql/createPostMutation"
import { useApolloWithReducer } from "shared/hooks/useApolloWithReducer"
import { CreateNewPostVariables, CreateNewPost } from "./gql/__generated__/CreateNewPost"
import { useContext, useEffect } from "react"
import { CreatePostFormType } from "layouts/CreatePost/types/CreatePostTypes"
import { useHistory } from "react-router-dom"
import { useErrorHandler } from "shared/hooks/useErrorHandler"
import { GlobalStateContext } from "shared/store/GlobalState"

type CreatePostHook = () => {
  createPost: (postInput: CreatePostFormType) => void,
  loading: boolean
}

export const useCreatePostMutation: CreatePostHook = () => {
  const [_createpost, querryData] = useMutation<CreateNewPost, CreateNewPostVariables>(createPostMutation)
  const { loading, data } = useApolloWithReducer(querryData)
  const { state } = useContext(GlobalStateContext)
  const { errorHandler } = useErrorHandler()
  const { push } = useHistory()

  //if success - goto main page
  useEffect(() => {
    if(data) push('/')
  }, [data, push])

  const createPost = async (postInput: CreatePostFormType) => {
    const {content, title} = postInput
    try {
      if(!state.user) throw new ApolloError({
        errorMessage: 'You are not authorized!'
      })

      if(!title) throw new ApolloError({
        errorMessage: 'Title is empty!'
      })

      if(!content) throw new ApolloError({
        errorMessage: 'Content is empty!'
      })

      await _createpost({
        variables: {
          author: state.user,
          ...postInput
        }
      })
    } catch (e) {
      errorHandler(e)
    }
  }

  return {
    createPost,
    loading
  }
}