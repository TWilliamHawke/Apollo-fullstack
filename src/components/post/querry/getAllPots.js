import { ApolloError } from "apollo-server-express"
import { Post } from "../model"

export const getAllPosts = () => {
  try {
    const posts = Post.find({})
    return posts
  } catch (error) {
    console.log(error)
    throw new ApolloError('server error')
  }
}