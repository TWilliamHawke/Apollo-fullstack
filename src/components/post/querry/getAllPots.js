import { ApolloError } from "apollo-server-express"
import { Post } from "../model"

export const getAllPosts = async () => {
  try {
    const posts = await Post.find({}).sort('-createdAt').limit(10)
    return posts
  } catch (error) {
    console.log(error)
    throw new ApolloError('server error')
  }
}