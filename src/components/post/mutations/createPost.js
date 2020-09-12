import { Post } from "../model"
import { ApolloError } from "apollo-server-express"

export const createPost = async (_, data) => {
  try {
    const post = new Post(data)
    await post.save()

    return post.id
  } catch(e) {
    console.log(e);
    throw new ApolloError('server error')
  }
}