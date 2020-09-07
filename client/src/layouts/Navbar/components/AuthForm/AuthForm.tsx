import React, { FC, ChangeEvent } from 'react'
import { ShowFormTrueType } from '../../types/NavbarTypes';
import { useShowHideAnimation } from 'shared/hooks/useShowHideAnimation';
import { useAuthData } from 'layouts/Navbar/hooks/useAuthData';
import { InputsType } from '../../types/AuthFormTypes';
import './authForm.scss';

type PropType = {
  showing: ShowFormTrueType
  onClose: () => void
}

const AuthForm: FC<PropType> = ({showing, onClose}) => {
  const isLoginForm = showing === 'login'
  const { authData, changeData} = useAuthData()

  const inputs: InputsType = [
    {title: 'Email', name: 'email', type: 'text'},
    {title: 'Username', name: 'userName', type: 'text'},
    {title: 'Password', name: 'password', type: 'password'},
  ]

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    changeData(name, value)
  }

  const {style, animationTrigger, hideElement} = useShowHideAnimation({
    action: onClose,
    duration: 0.3,
    showAnimation: 'show',
    hideAnimation: 'hide'
  })

  const inputsJSX = inputs.map(({title, name, type}) => {
    if(isLoginForm && name === 'userName') return null;

    return (
      <fieldset key={name}>
        <label htmlFor={`auth-${name}`}>{title}</label>
        <input
          value={authData[name]}
          onChange={inputHandler}
          id={`auth-${name}`}
          type='text'
          name={type} />
      </fieldset>
    )
  })

  const logger = () => {
    console.log(authData)
  }

  const loginButtonJSX = <button onClick={logger} className='auth-form-button'>Login</button>;
  const signUpButtonJSX = <button onClick={logger} className='auth-form-button'>SignUp</button>;

  const displayedButton = isLoginForm ? loginButtonJSX : signUpButtonJSX

  return(
    <div className='auth-form' style={style} onAnimationEnd={hideElement} >
      <button onClick={animationTrigger} className='auth-form-closeButton'>Close</button>
      <form>
        {inputsJSX}
        {displayedButton}
      </form>
    </div>
  )
}

export default AuthForm
