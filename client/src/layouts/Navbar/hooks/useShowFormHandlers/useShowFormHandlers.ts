import { ShowFormType } from "layouts/Navbar/types/NavbarTypes";
import { useState, useContext, useEffect } from "react";
import { GlobalStateContext } from "shared/store/GlobalState";

type ShowFormHandlers = {
  showForm: ShowFormType,
  loginClick: () => void
  signUpClick: () => void
  closeHandler: () => void
}


const useShowFormHandlers = (): ShowFormHandlers => {
  const [showForm, setShowForm] = useState<ShowFormType>('');
  const { state: { user } } = useContext(GlobalStateContext)

  //hide authForm after login
  useEffect(() => {
    if(user) setShowForm('')
  }, [user])
    
  const loginClick = () => {
    setShowForm('login')
  }
  
  const signUpClick = () => {
    if(showForm === 'signUp') {
      setShowForm('')
    } else {
      setShowForm('signUp')
    }
  }
  
  const closeHandler = () => {
    setShowForm('')
  }

  return {
    showForm,
    closeHandler,
    signUpClick,
    loginClick
  }
}

export default useShowFormHandlers