import React, { FC } from 'react';
import { useNewPostSubsctiption } from '../../hooks/useNewPostSubsctiption';

import './new-post-listener.scss'

type PropTypes = {
  handler: () => void
}

const NewPostListener: FC<PropTypes> = ({ handler }) => {
  const { newPostCount, resetNewPostCount } = useNewPostSubsctiption();

  const clickHandler = () => {
    resetNewPostCount()
    handler()
  }

  if(!newPostCount) return null;

  return (
    <div onClick={clickHandler} className='new-listener'>
      {newPostCount} new post(s)
    </div>
  );
};

export default NewPostListener;