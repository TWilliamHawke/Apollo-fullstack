import React, { FC, FormEvent } from 'react'
//components
import { AuthField } from '../AuthField'
//hooks
import { useShowHideAnimation } from 'shared/hooks/useShowHideAnimation'
import { useAuthData } from '../../hooks/useAuthData'
import { useAuthValidators } from '../../hooks/useAuthValidators'
import { useAuthSubmitHandler } from '../../hooks/useAuthSubmitHandler'
//types
import { ShowFormTrueType } from '../../types/NavbarTypes'
import { InputsType } from '../../types/AuthFormTypes'
//styles
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
  const { authSubmitHandler } = useAuthSubmitHandler(isLoginForm)

  const inputs: InputsType = [
    { title: 'Email', name: 'email', type: 'text' },
    { title: 'Username', name: 'userName', type: 'text' },
    { title: 'Password', name: 'password', type: 'password' },
  ]

  const { style, onAnimationEnd, hideAnimationTrigger, } = useShowHideAnimation({
    action: onClose,
    duration: 0.3,
    showAnimation: 'show',
    hideAnimation: 'hide',
  })

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    //if wrong data - do nothing
    if(!formIsValid) return;
    authSubmitHandler(authData)
  }


  const inputsJSX = inputs.map((inputData) => {
    const { name } = inputData
    if (isLoginForm && name === 'userName') return null

    return <AuthField
      key={name}
      changeHandler={changeData}
      inputClass={authValidation[name]} 
      inputValue={authData[name]}
      inputData={inputData}
      />
  })


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
