import { useContext } from "react"
import { FetchFailure } from "shared/store/actions"
import { GlobalStateContext } from "shared/store/GlobalState"

type errorHandlerType = {
  errorHandler: (e: unknown) => void
}

export const useErrorHandler = (): errorHandlerType => {
  const { dispatch } = useContext(GlobalStateContext)


  const errorHandler = (e: unknown) => {
    if(e instanceof Error) {
      dispatch(FetchFailure(e.message))
    } else if (typeof e === 'string') {
      dispatch(FetchFailure(e))
    } else {
      dispatch(FetchFailure('Some strange Error occured'))
    }
  }

  return {
    errorHandler
  }
}