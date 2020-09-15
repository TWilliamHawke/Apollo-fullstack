import React, { FC } from 'react';
import { ShowFormTrueType } from '../../types/NavbarTypes';

type PropTypes = {
  showForm: string
  showhideForm: (name: ShowFormTrueType) => void
}

const AuthButtons: FC<PropTypes> = ({ showForm, showhideForm }) => {

  const showHideLogin = () => {
    showhideForm('login')
  }

  const showHideSignUp = () => {
    showhideForm('signUp')
  }

  return (
  <ul className="navbar-buttons">
    <li
      className={showForm === 'signUp' ? 'active' : ''}
      onClick={showHideSignUp}
    >
      Sign Up
    </li>
    <li
      className={showForm === 'login' ? 'active' : ''}
      onClick={showHideLogin}
    >
      Login
    </li>
  </ul>);
};

export default AuthButtons;