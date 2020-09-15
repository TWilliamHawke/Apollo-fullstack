import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { dateTf } from 'shared/utils/dateTf';
import './post-preview.scss'

type PropTypes = {
  author: string
  title: string
  createdAt: number
  id: string
}

const PostPreview: FC<PropTypes> = ({author, title, createdAt, id}) => {
  const date = dateTf(createdAt)
  const { push } = useHistory();

  const gotoPost = () => {
    push(`/posts/${id}`)
  }


  return (
    <div onClick={gotoPost} className='postPreview'>
      <p className='postPreview-info'>Posted by {author} at {date}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default PostPreview;