import { ShowFormType } from "layouts/Navbar/types/NavbarTypes";
import { useState } from "react";

type ShowFormHandlers = {
  showForm: ShowFormType,
  loginClick: () => void
  signUpClick: () => void
  closeHandler: () => void
}


const useShowFormHandlers = (): ShowFormHandlers => {
  const [showForm, setShowForm] = useState<ShowFormType>('');

    
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