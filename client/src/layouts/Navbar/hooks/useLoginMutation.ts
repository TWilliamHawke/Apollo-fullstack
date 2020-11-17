import { useMutation } from "@apollo/react-hooks"
import { useEffect, useContext } from "react"
// context data
import { GlobalStateContext } from "shared/store/GlobalState"
//actions
import { setUser } from "shared/store/actions"
//hooks
import { useApolloWithReducer } from "shared/hooks/useApolloWithReducer"
import { useErrorHandler } from "shared/hooks/useErrorHandler"
//gql
import { loginMutation } from "./gql/loginMutation"
//types
import { login, loginVariables } from "./gql/__generated__/login"

type LoginMutationType = {
  loginHandler: (data: loginVariables) => void
}


//
export const useLoginMutation = ():LoginMutationType => {
  const [_login, querryData] = useMutation<login, loginVariables>(loginMutation)
  const { data } = useApolloWithReducer(querryData)
  const { dispatch } = useContext(GlobalStateContext)
  const { errorHandler } = useErrorHandler();

  useEffect(() => {
    if(!data) return
    dispatch(setUser(data.login))

  }, [data, dispatch])

  const loginHandler = async (loginData: loginVariables) => {
    try {
      await _login({variables: loginData})

    } catch (e) {
      errorHandler(e)
    }
  }

  return {
    loginHandler
  }
}

export default useLoginMutation
