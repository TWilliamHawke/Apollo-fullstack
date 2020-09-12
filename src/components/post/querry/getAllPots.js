import { ApolloError } from "apollo-server-express"
import { Post } from "../model"

export const getAllPots = () => {
  try {
    const posts = Post.find({})
    return posts
  } catch (error) {
    throw new ApolloError('server error')
  }
}