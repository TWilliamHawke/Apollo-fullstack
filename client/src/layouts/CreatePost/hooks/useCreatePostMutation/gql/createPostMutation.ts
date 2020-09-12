import { gql } from "@apollo/react-hooks";

export const createPostMutation = gql`
  mutation CreateNewPost($title: String!, $content: String!, $author: String!) {
    createPost(title: $title, content: $content, author: $author)
  }
`