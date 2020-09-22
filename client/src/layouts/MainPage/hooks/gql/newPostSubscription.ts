import { gql } from "@apollo/react-hooks";

export const newPostSubscription = gql`
  subscription NewPostSubscription {
    postCreated {
      _id
    }
  }
`