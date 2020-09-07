import express from 'express'
import { apolloServer } from './apolloServer'

export const app = express()


apolloServer.applyMiddleware({
  app
})

export const { graphqlPath } = apolloServer