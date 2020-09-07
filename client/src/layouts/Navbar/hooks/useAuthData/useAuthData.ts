import { useState } from "react"
import { AuthDataType } from "layouts/Navbar/types/AuthFormTypes"

type AuthData = {
  authData: AuthDataType,
  changeData: (name: string, value: string) => void,
}

const useAuthData = (): AuthData => {
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

export default useAuthData