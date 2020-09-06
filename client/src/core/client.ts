import {
  ApolloClient,
  InMemoryCache,
  HttpLink
} from '@apollo/client'

import { uri } from './config/links';

const link = new HttpLink({
  uri,
})

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

