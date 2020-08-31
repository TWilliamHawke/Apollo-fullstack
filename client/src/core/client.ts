import {
  ApolloClient,
  InMemoryCache,
  HttpLink
} from '@apollo/client'

const uri = 'http://localhost:4000/graphql'

const link = new HttpLink({
  uri,
})

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    
  })
})

