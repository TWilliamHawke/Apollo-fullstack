import React, { FC, FormEvent } from 'react'
import { usePostData } from './hooks/usePostData'
import { useCreatePostMutation } from './hooks/useCreatePostMutation/useCreatePostMutation'
import './create-post-form.scss'

const CreatePost: FC = () => {
  const { createPostInputsHandler, postData } = usePostData()
  const { createPost, loading } = useCreatePostMutation()

  const changeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target
    createPostInputsHandler(name, value)
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (loading) return
    createPost(postData)
  }

  return (
    <>
      <h2>Create New Post</h2>
      <form className="create-post-form" onSubmit={submitHandler}>
        <fieldset className="create-post-form-field">
          <label className="create-post-form-label" htmlFor="create-post-title">
            Title
          </label>
          <input
            className="create-post-form-input"
            type="text"
            value={postData.title}
            onChange={changeHandler}
            name="title"
            id="create-post-title"
          />
        </fieldset>
        <fieldset className="create-post-form-field">
          <label
            className="create-post-form-label"
            htmlFor="create-post-content"
          >
            Content
          </label>
          <textarea
            className="create-post-form-area"
            onChange={changeHandler}
            value={postData.content}
            name="content"
            id="create-post-content"
            rows={10}
          />
        </fieldset>
        <button className="create-post-form-btn" type="submit">
          Publish
        </button>
      </form>
    </>
  )
}

export default CreatePost
