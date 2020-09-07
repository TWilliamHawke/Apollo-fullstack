import React, { FC } from 'react';

import './navbar.scss'
import { AuthForm } from './components/AuthForm';
import { useShowFormHandlers } from './hooks/useShowFormHandlers';


const Navbar: FC = () => {
  const { loginClick, showForm, signUpClick, closeHandler} = useShowFormHandlers()

  const formJSX = showForm && <AuthForm onClose={closeHandler} showing={showForm} />

  return(
    <nav className='navbar'>
      <div className='navbar-container'>
        <ul className='navbar-buttons'>
          <li
            className={showForm === 'signUp' ? 'active' : ''}
            onClick={signUpClick}>Sign Up</li>
          <li
            className={showForm === 'login' ? 'active' : ''}
            onClick={loginClick}>Login</li>
        </ul>
        {formJSX}
      </div>
    </nav>
  )
}

export default Navbar