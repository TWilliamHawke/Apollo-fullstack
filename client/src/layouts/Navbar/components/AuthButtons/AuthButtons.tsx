import React, { FC } from 'react';

type PropTypes = {
  showLoginForm: () => void
  showSignUpForm: () => void
  showForm: string
}

const AuthButtons: FC<PropTypes> = ({showLoginForm, showSignUpForm, showForm}) => {
  return (
  <ul className="navbar-buttons">
    <li
      className={showForm === 'signUp' ? 'active' : ''}
      onClick={showSignUpForm}
    >
      Sign Up
    </li>
    <li
      className={showForm === 'login' ? 'active' : ''}
      onClick={showLoginForm}
    >
      Login
    </li>
  </ul>);
};

export default AuthButtons;