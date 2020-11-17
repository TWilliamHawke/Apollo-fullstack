import React, { FC } from 'react'
//components
import { AuthForm } from './components/AuthForm'
import { AuthButtons } from './components/AuthButtons'
import { UserButtons } from './components/UserButtons'
//hooks
import { useShowFormHandlers } from './hooks/useShowFormHandlers'
import { useUserData } from 'shared/hooks/useUserData'
//styles
import './navbar.scss'

const Navbar: FC = () => {
  const { user } = useUserData();
  const { showForm, closeHandler, buttonsHandler } = useShowFormHandlers()

  const formJSX = showForm && (
    <AuthForm onClose={closeHandler} showing={showForm} />
  )

  const buttonsJSX = user ? (
    <UserButtons />
  ) : (
    <AuthButtons formName={showForm} showhideForm={buttonsHandler} />
  )

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {buttonsJSX}
        {formJSX}
      </div>
    </nav>
  )
}

export default Navbar
