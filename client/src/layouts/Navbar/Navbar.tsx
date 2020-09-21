import React, { FC } from 'react'
//compnents
import { AuthForm } from './components/AuthForm'
import { AuthButtons } from './components/AuthButtons'
import { UserButtons } from './components/UserButtons'
import { useShowFormHandlers } from './hooks/useShowFormHandlers'
import './navbar.scss'
import { useUserData } from 'shared/hooks/useUserData'

const Navbar: FC = () => {
  const { user } = useUserData();
  const { showForm, closeHandler, buttonsHandler } = useShowFormHandlers()

  const formJSX = showForm && (
    <AuthForm onClose={closeHandler} showing={showForm} />
  )

  const buttonsJSX = user ? (
    <UserButtons />
  ) : (
    <AuthButtons showForm={showForm} showhideForm={buttonsHandler} />
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
