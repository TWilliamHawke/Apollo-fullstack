import { AuthDataType, AuthDataValidationType } from "layouts/Navbar/types/AuthFormTypes"
import { useState, useEffect, useContext } from "react"
import { GlobalStateContext } from "shared/store/GlobalState"

// type AuthValidator = (value: string) => boolean
export type AuthValidatorInput = [a: AuthDataType, b: boolean]
export type AuthValidatorOutPut = {
  authValidation: AuthDataValidationType
  formIsValid: boolean
}
type AuthValidatorsHook = (...args: AuthValidatorInput) => AuthValidatorOutPut

const useAuthValidators: AuthValidatorsHook = (
  {email, password, userName}, isLoginForm) => {

  const [emailValid, setEmailValid] = useState(false)
  const [userNameValid, setUserNameValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)
  const { state: {loading} } = useContext(GlobalStateContext)

  useEffect(() => {
    setUserNameValid(userName.length > 1)
  }, [userName])

  useEffect(() => {
    setPasswordValid(password.length > 5)
  }, [password])

  useEffect(() => {    
    setEmailValid(!!email.match(/\S+@\S+\.\S+/))
  }, [email])

  const signUpDataIsValid = emailValid && passwordValid && userNameValid && !loading
  const loginIsValid = emailValid && passwordValid && !loading
  const formIsValid = isLoginForm ? loginIsValid : signUpDataIsValid
  
  return {
    authValidation: {
      email: emailValid,
      password: passwordValid,
      userName: userNameValid
    },
    formIsValid,
  }
}

export default useAuthValidators