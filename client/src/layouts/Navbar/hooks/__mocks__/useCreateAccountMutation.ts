
type CreateAccountData = {
  loading: boolean,
  data: string
}


export const useCreateAccountMutation = (): CreateAccountData => {
  return {
    loading: true,
    data: 'CreateAccountData'
  }
}