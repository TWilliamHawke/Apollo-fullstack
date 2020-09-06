import { useQuery } from "@apollo/react-hooks"
import { QUERY } from "./gql/createAccountMutation"
import { useApolloWithReducer } from "shared/hooks/useApolloWithReducer"
import { testQuery } from "./gql/__generated__/testQuery"


type CreateAccountData = {
  loading: boolean,
  data: testQuery | undefined
}

const useCreateAccountMutation = (): CreateAccountData => {
  const queryResult = useQuery<testQuery>(QUERY)
  const { data, loading } = useApolloWithReducer(queryResult)

  return {
    data,
    loading
  }
}

export default useCreateAccountMutation