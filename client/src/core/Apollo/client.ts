import { ApolloClient, InMemoryCache } from '@apollo/client'
import { link } from './link';


export const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    resultCaching: false
  })
})

