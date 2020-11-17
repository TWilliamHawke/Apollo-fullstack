import React, { FC } from 'react'
import { Spinner } from 'shared/components/Spinner'
import { dateTf } from 'shared/utils/dateTf'
import { useGetThisPostQuery } from './hooks/useGetThisPostQuery'
import './post.scss'

const Post: FC = () => {
  const { loading, postData } = useGetThisPostQuery()

  if (loading || !postData) return <Spinner />

  const { author, content, title, createdAt } = postData
  const date = dateTf(createdAt)

  return (
    <div className='post'>
      <p className='postPreview-info'>Posted by {author} at {date}</p>
      <h1 className='post-header'>{title}</h1>
      <p>{content}</p>
      <div className='comments'>
        <h2 className='comments-header'>Comments</h2>
        <p className='comments__empty'>No comments yet</p>
      </div>
    </div>
  )
}

export default Post
