import React, { FC } from 'react';
import { ShowFormTrueType } from '../../types/NavbarTypes';

type PropTypes = {
  formName: string
  showhideForm: (name: ShowFormTrueType) => void
}

const AuthButtons: FC<PropTypes> = ({ formName, showhideForm }) => {

  const showHideLogin = () => {
    showhideForm('login')
  }

  const showHideSignUp = () => {
    showhideForm('signUp')
  }

  return (
  <ul className="navbar-buttons">
    <li
      className={formName === 'signUp' ? 'active' : ''}
      onClick={showHideSignUp}
    >
      Sign Up
    </li>
    <li
      className={formName === 'login' ? 'active' : ''}
      onClick={showHideLogin}
    >
      Login
    </li>
  </ul>);
};

export default AuthButtons;