import { useState } from "react"
import { AuthDataType } from "../types/AuthFormTypes"

export type AuthDataHook = {
  authData: AuthDataType,
  changeData: (name: string, value: string) => void,
}

export const useAuthData = (): AuthDataHook => {
  const [authData, setAuthData] = useState<AuthDataType>({
    email: '',
    password: '',
    userName: ''
  })

  const changeData = (name: string, value: string) => {    
    setAuthData(old => ({
      ...old,
      [name]: value
    }))
  }

  return {
    authData,
    changeData,
  }

}
