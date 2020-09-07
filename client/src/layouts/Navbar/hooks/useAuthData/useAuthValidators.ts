import { AuthDataType, AuthDataValidationType } from "layouts/Navbar/types/AuthFormTypes"
import { useState, useEffect } from "react"

// type AuthValidator = (value: string) => boolean
type AuthValidatorsHook = (data: AuthDataType) => {
  authValidation: AuthDataValidationType
  formIsValid: boolean
  loginIsValid: boolean
}

export const useAuthValidators: AuthValidatorsHook = (
  {email, password, userName}) => {

  const [emailValid, setEmailValid] = useState(false)
  const [userNAmeValid, setUserNameValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)

  useEffect(() => {
    setUserNameValid(userName.length > 1)
  }, [userName])

  useEffect(() => {
    setPasswordValid(password.length > 5)
  }, [password])

  useEffect(() => {    
    setEmailValid(!!email.match(/\S+@\S+\.\S+/))
    
  }, [email])

  useEffect(() => {
    console.log(emailValid);
    
  }, [emailValid])

  const formIsValid = emailValid && passwordValid && userNAmeValid
  const loginIsValid = emailValid && passwordValid
  
  return {
    authValidation: {
      email: emailValid,
      password: passwordValid,
      userName: userNAmeValid
    },
    formIsValid,
    loginIsValid
  }
}