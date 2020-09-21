import { gql } from "@apollo/react-hooks";

export const getAllPosts = gql`
  query GetAllPostQuerry {
    getAllPosts {
      author
      title
      content
      createdAt
      _id
    }
  }
`