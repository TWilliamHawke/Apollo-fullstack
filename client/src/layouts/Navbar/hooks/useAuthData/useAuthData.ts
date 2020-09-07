import { useState } from "react"

type AuthDataType = {
  email: string
  password: string
  userName: string
}

type AuthData = {
  authData: AuthDataType,
  changeData: (name: string, value: string) => void
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
    changeData
  }

}

export default useAuthData