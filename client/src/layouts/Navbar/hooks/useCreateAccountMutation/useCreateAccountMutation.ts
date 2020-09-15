import { useMutation } from "@apollo/react-hooks"
import { createAccountMutation } from "./gql/createAccountMutation"
import { useApolloWithReducer } from "shared/hooks/useApolloWithReducer"
import { signUp, signUpVariables } from "./gql/__generated__/signUp"
import { AuthDataType } from "layouts/Navbar/types/AuthFormTypes"
import { useErrorHandler } from "shared/hooks/useErrorHandler"


type CreateAccountData = {
  loading: boolean,
  createAccount: (data: AuthDataType) => void
}

const useCreateAccountMutation = (): CreateAccountData => {
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