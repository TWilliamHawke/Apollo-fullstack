import { useContext } from 'react'
import { GlobalStateContext } from 'shared/store/GlobalState'

type UserDataType = {
  user: string | undefined
}

export const useUserData = (): UserDataType => {
  const { state } = useContext(GlobalStateContext)
  const { user } = state

  return { user }
}
