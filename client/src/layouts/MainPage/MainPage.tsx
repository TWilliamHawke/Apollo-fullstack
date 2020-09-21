import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Spinner } from 'shared/components/Spinner'
import PostPreview from './components/PostPreview'
import { useGetAllPostsQuery } from './hooks/useGetAllPostsQuery'
import './mainPage.scss'

const MainPage: FC = () => {
  const { push } = useHistory()

  const gotoNewPost = () => {
    push('/newpost')
  }

  const { loading, posts } = useGetAllPostsQuery()

  if (loading) return <Spinner />

  const postPreviewJSX = posts.map(({ _id, author, title, createdAt }) => {
    return (
      <PostPreview
        key={_id}
        id={_id}
        createdAt={createdAt}
        author={author}
        title={title}
      />
    )
  })

  return (
    <div className="main">
      <div className="main-wrapper">
        <h1 className='main-header'>Recent Posts</h1>
        <div className="main-add">
          <button className="main-btn" onClick={gotoNewPost}>
            New Post
          </button>
        </div>
      </div>
      {postPreviewJSX}
    </div>
  )
}

export default MainPage
