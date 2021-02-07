import { Post } from "../model"
import { AuthenticationError } from "apollo-server-express"
import { pubsub } from "../../../core/pubsub"
import { events } from "../events"

export const createPost = async (_, data, { req }) => {
  try {
    if(!req.userName || !data.author) throw new AuthenticationError('you are not authorized')
    const post = new Post(data)
    await post.save()

    pubsub.publish(events.POST_CREATED, {
      postCreated: post
    })

    return post.id
  } catch(e) {
    console.log(e);
  }
}