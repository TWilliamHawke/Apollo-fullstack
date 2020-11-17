import { useState, useContext, useEffect } from 'react'
//context data
import { GlobalStateContext } from 'shared/store/GlobalState'
//types
import { ShowFormTrueType, ShowFormType } from '../types/NavbarTypes'

type ShowFormHandlers = {
  showForm: ShowFormType
  closeHandler: () => void
  buttonsHandler: (name: ShowFormTrueType) => void
}

export const useShowFormHandlers = (): ShowFormHandlers => {
  const [showForm, setShowForm] = useState<ShowFormType>('')
  const {
    state: { user },
  } = useContext(GlobalStateContext)

  //hide form after login
  useEffect(() => {
    if (user) setShowForm('')
  }, [user])

  const buttonsHandler = (name: ShowFormTrueType) => {
    if (showForm === name) {
      setShowForm('')
    } else {
      setShowForm(name)
    }
  }

  const closeHandler = () => {
    setShowForm('')
  }

  return {
    showForm,
    closeHandler,
    buttonsHandler,
  }
}
