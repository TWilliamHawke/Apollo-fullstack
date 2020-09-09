import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { RouterParamsType } from 'shared/types/RouterTypes';

const Post: FC = () => {
  const { post } = useParams<RouterParamsType>()

  return (
    <div>
      <h1>Post #{post}</h1>
      <p>
        <span>post author</span>
        <span>Created at: '19-09-2020'</span>
      </p>
      <p>Post body</p>
    </div>
  );
};

export default Post;