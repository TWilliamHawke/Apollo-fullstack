import React, { FC, useContext } from 'react'

import './navbar.scss'
import { AuthForm } from './components/AuthForm'
import { useShowFormHandlers } from './hooks/useShowFormHandlers'
import { GlobalStateContext } from 'shared/store/GlobalState'
import { AuthButtons } from './components/AuthButtons'
import { UserButtons } from './components/UserButtons'

const Navbar: FC = () => {
  const { state } = useContext(GlobalStateContext)
  const {
    showForm,
    closeHandler,
    buttonsHandler
  } = useShowFormHandlers()

  const formJSX = showForm && (
    <AuthForm onClose={closeHandler} showing={showForm} />
  )

  const buttonsJSX = state.user ? (
    <UserButtons />
  ) : (
    <AuthButtons
      showForm={showForm}
      showhideForm={buttonsHandler}
    />
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
