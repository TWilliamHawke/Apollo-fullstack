import { Post } from "../model"

export const getPostById = async (_, {id}) => {
  const post = await Post.findById(id)

  return post || null
}