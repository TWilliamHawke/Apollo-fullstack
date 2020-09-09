import { useMutation } from "@apollo/react-hooks"
import { loginMutation } from "./gql/loginMutation"
import { login, loginVariables } from "./gql/__generated__/login"
import { useEffect, useContext } from "react"
import { GlobalStateContext } from "shared/store/GlobalState"
import { setUser, FetchFailure } from "shared/store/actions"
import { useApolloWithReducer } from "shared/hooks/useApolloWithReducer"

type LoginMutationType = {
  loginHandler: (data: loginVariables) => void
}


//
const useLoginMutation = ():LoginMutationType => {
  const [_login, querryData] = useMutation<login, loginVariables>(loginMutation)
  const { data } = useApolloWithReducer(querryData)
  const { dispatch } = useContext(GlobalStateContext)

  useEffect(() => {
    if(!data) return
    dispatch(setUser(data.login))

  }, [data, dispatch])

  const loginHandler = async (loginData: loginVariables) => {
    try {
      await _login({variables: loginData})

    } catch (e) {
      dispatch(FetchFailure(e.message))
    }
  }

  return {
    loginHandler
  }
}

export default useLoginMutation
