import { AuthDataType } from "../types/AuthFormTypes"
import { useCreateAccountMutation } from "./useCreateAccountMutation"
import { useLoginMutation } from "./useLoginMutation"

export type AuthSubmitHandlerHook = {
  authSubmitHandler: (authData: AuthDataType) => void
}

export const useAuthSubmitHandler = (isLoginForm: boolean): AuthSubmitHandlerHook => {
  const { createAccount } = useCreateAccountMutation()
  const { loginHandler } = useLoginMutation()

  
  const authSubmitHandler = (authData: AuthDataType): void => {
    if(isLoginForm) {
      loginHandler(authData)
    } else {
      createAccount(authData)
    }

  }

  return {
    authSubmitHandler
  }

}
