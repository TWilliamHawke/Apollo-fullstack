import { useSubscription } from "@apollo/react-hooks";
import { useEffect, useState } from "react";
import { useErrorHandler } from "shared/hooks/useErrorHandler";
//gql query
import { newPostSubscription } from "./gql/newPostSubscription";
//types
import { NewPostSubscription } from "./gql/__generated__/NewPostSubscription";

type NewPostSubsctiptionHook = () => {
  newPostCount: number,
  resetNewPostCount: () => void
}

export const useNewPostSubsctiption: NewPostSubsctiptionHook = () => {
  const [ newPostCount, setNewPostCount ] = useState(0);
  const { error, data } = useSubscription<NewPostSubscription>(newPostSubscription);
  const { errorHandler } = useErrorHandler();

  useEffect(() => {
    if(!error) return;
    errorHandler(error)

  }, [error, errorHandler])

  //inc post count after handler
  useEffect(() => {
    if(!data) return
    setNewPostCount(prev => prev + 1)
  }, [data])

  const resetNewPostCount = () => {
    setNewPostCount(0)
  }

  return {
    newPostCount,
    resetNewPostCount
  }
}