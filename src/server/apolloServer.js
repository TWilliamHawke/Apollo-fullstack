const { ApolloServer } = require("apollo-server-express")
import { resolvers } from './resolvers';
import schema from './types.gql';



export const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers
})
