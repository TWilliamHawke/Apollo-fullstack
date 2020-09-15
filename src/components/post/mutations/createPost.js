import { Post } from "../model"
import { AuthenticationError } from "apollo-server-express"

export const createPost = async (_, data, context) => {
  try {
    if(!context.user) throw new AuthenticationError('you are not authorized')
    const post = new Post(data)
    await post.save()

    return post.id
  } catch(e) {
    console.log(e);
  }
}