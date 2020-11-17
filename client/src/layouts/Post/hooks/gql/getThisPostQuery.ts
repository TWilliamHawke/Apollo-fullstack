import { gql } from "@apollo/react-hooks";

export const getThisPostQuery = gql`
 query GetThisPost($id: ID!) {
   getPostById(id: $id) {
     title
     author
     createdAt
     content
   }
 }
`