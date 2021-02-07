import { userMutations } from '../../components/user/mutations';
import { postMutations } from '../../components/post/mutations';


export const Mutation = {
  ...userMutations,
  ...postMutations
}