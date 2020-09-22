import { pubsub } from '../../../server/pubsub';
import { postEvents } from '../events';

export const postSubscriptions = {
  postCreated: {
    subscribe: () => pubsub.asyncIterator([postEvents.POST_CREATED])
  }
}