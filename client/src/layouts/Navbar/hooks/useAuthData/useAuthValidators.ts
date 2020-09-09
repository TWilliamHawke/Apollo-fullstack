import { AuthDataType, AuthDataValidationType } from "layouts/Navbar/types/AuthFormTypes"
import { useState, useEffect, useContext } from "react"
import { GlobalStateContext } from "shared/store/GlobalState"

// type AuthValidator = (value: string) => boolean
type AuthValidatorsHook = (data: AuthDataType, isLoginForm: boolean) => {
  authValidation: AuthDataValidationType
  formIsValid: boolean
}

export const useAuthValidators: AuthValidatorsHook = (
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