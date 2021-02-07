import { pubsub } from '../../../core/pubsub';
import { postEvents } from '../events';

export const postSubscriptions = {
  postCreated: {
    subscribe: () => pubsub.asyncIterator([postEvents.POST_CREATED])
  }
}