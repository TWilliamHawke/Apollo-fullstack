import React, { useContext, FC } from 'react';
import { GlobalStateContext } from 'shared/store/GlobalState';
import { logout } from 'shared/store/actions';


const UserButtons: FC = () => {
  const { state, dispatch } = useContext(GlobalStateContext)

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <ul className="navbar-buttons">
      <li>{state.user}</li>
      <li onClick={logoutHandler}>Logout</li>
    </ul>
  );
};

export default UserButtons;