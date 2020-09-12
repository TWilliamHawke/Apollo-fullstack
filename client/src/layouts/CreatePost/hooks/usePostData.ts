import { useState } from "react"
import { CreatePostFormType } from "../types/CreatePostTypes"

type PostDataHook = () => {
  postData: CreatePostFormType,
  createPostInputsHandler: (name: string, value: string) => void
}

export const usePostData: PostDataHook = () => {
  const [postData, setPostData] = useState<CreatePostFormType>({
    content: '',
    title: ''
  })

  const createPostInputsHandler = (name: string, value: string) => {
    setPostData(old => ({
      ...old,
      [name]: value
    }))
  }

  return {
    postData,
    createPostInputsHandler
  }
}