import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

const MainPage: FC = () => {
  const { push } = useHistory()

  const gotoNewPost = () => {
    push('/newpost')
  }

  const gotoPost = () => {
    push('/posts/1')
  }

  return (
    <div>
      Recent Posts
      <button onClick={gotoNewPost}>New Post</button>
      <h2 onClick={gotoPost}>Post #1</h2>
    </div>
  );
};

export default MainPage;