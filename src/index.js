import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

import { PORT } from './server/config'

const schema = gql`
  type Query {
    hello: String
  }
`


const resolvers = {
  Query: {
    hello: () => 'hello'
  }
}

const app = express()

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
})

server.applyMiddleware({
  app
})


app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`))