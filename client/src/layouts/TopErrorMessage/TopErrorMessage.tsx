import React, { FC, useContext } from 'react';
import { clearGlobalErrors } from 'shared/store/actions'

import './error-message.scss'
import { useShowHideAnimation } from 'shared/hooks/useShowHideAnimation';
import { GlobalStateContext } from 'shared/store/GlobalState';

const TopErrorMessage: FC = () => {
  const { state, dispatch } = useContext(GlobalStateContext)
  const hideErrorMessage = () => {
    dispatch(clearGlobalErrors())
  }

  const {onAnimationEnd, hideAnimationTrigger, style} = useShowHideAnimation({
    action: hideErrorMessage,
    duration: 0.3,
    hideAnimation: 'hide-top',
    showAnimation: 'show-top'
  })

  if(!state.errors) return null;

  return (
    <div style={style} onAnimationEnd={onAnimationEnd} className='top-error'>
      <div className="top-error-text">{state.errors}</div>
      <button onClick={hideAnimationTrigger}>X</button>
    </div>
  );
};

export default TopErrorMessage;