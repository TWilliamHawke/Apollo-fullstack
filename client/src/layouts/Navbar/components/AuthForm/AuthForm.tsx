import React, { FC, ChangeEvent, FormEvent } from 'react'
import { ShowFormTrueType } from '../../types/NavbarTypes'
import { useShowHideAnimation } from 'shared/hooks/useShowHideAnimation'
import { useAuthData } from 'layouts/Navbar/hooks/useAuthData'
import { InputsType } from '../../types/AuthFormTypes'
import { useAuthValidators } from 'layouts/Navbar/hooks/useAuthData/useAuthValidators'
import { useCreateAccountMutation } from 'layouts/Navbar/hooks/useCreateAccountMutation'
import useLoginMutation from 'layouts/Navbar/hooks/useLoginMutation/useLoginMutation'
import './authForm.scss'

type PropType = {
  showing: ShowFormTrueType
  onClose: () => void
}

const AuthForm: FC<PropType> = ({ showing, onClose }) => {
  const isLoginForm = showing === 'login'
  const { authData, changeData } = useAuthData()
  const { formIsValid, authValidation } = useAuthValidators(
    authData, isLoginForm
  )
  const { createAccount } = useCreateAccountMutation()
  const { loginHandler } = useLoginMutation()

  const inputs: InputsType = [
    { title: 'Email', name: 'email', type: 'text' },
    { title: 'Username', name: 'userName', type: 'text' },
    { title: 'Password', name: 'password', type: 'password' },
  ]

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    changeData(name, value)
  }

  const { style, onAnimationEnd, hideAnimationTrigger, } = useShowHideAnimation({
    action: onClose,
    duration: 0.3,
    showAnimation: 'show',
    hideAnimation: 'hide',
  })

  const inputsJSX = inputs.map(({ title, name, type }) => {
    if (isLoginForm && name === 'userName') return null

    return (
      <fieldset key={name}>
        <label htmlFor={`auth-${name}`}>{title}</label>
        <input
          className={authValidation[name] ? 'green' : ''}
          value={authData[name]}
          onChange={inputHandler}
          id={`auth-${name}`}
          type={type}
          name={name}
        />
      </fieldset>
    )
  })

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    //if wrong data - do nothing
    if(!formIsValid) return;

    if(isLoginForm) {
      loginHandler(authData)
    } else {
      createAccount(authData)
    }
  }

  return (
    <div className="auth-form" style={style} onAnimationEnd={onAnimationEnd}>
      <button onClick={hideAnimationTrigger} className="auth-form-closeButton">
        Close
      </button>
      <form onSubmit={submitHandler}>
        {inputsJSX}
        <button
          disabled={!formIsValid}
          className="auth-form-button">
          {isLoginForm ? 'Login' : 'SignUp'}
        </button>
      </form>
    </div>
  )
}

export default AuthForm
