import { useMutation } from "@apollo/react-hooks"
//hooks
import { useApolloWithReducer } from "shared/hooks/useApolloWithReducer"
import { useErrorHandler } from "shared/hooks/useErrorHandler"
//gql query
import { createAccountMutation } from "./gql/createAccountMutation"
//types
import { signUp, signUpVariables } from "./gql/__generated__/signUp"
import { AuthDataType } from "../types/AuthFormTypes"


type CreateAccountData = {
  loading: boolean,
  createAccount: (data: AuthDataType) => void
}

export const useCreateAccountMutation = (): CreateAccountData => {
  const [_signUp, querryData] = useMutation<signUp, signUpVariables>(createAccountMutation)
  const { loading } = useApolloWithReducer(querryData)
  const { errorHandler } = useErrorHandler();

  const createAccount = async ({email, password, userName}: AuthDataType) => {
    try {
      await _signUp({
        variables: {
          email,
          password,
          username: userName
        }
      })
    } catch(e) {
      errorHandler(e)
    }
  }

  return {
    loading,
    createAccount
  }
}

export default useCreateAccountMutation