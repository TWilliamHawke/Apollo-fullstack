import express from 'express'
import http from 'http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { apolloServer } from './apolloServer'
import { corsOptions } from './config';
import { setUser } from './middleware/setUser';

export const app = express()

app.use(cookieParser())
app.use(cors(corsOptions))
app.use(setUser)

// app.use((req, res, next) => {
//   console.log('data', req.cookies);
//   res.cookie('rememberme', '111', { expires: new Date(Date.now() + 900000), httpOnly: true});
//   res.setHeader('Access-Control-Allow-Origin', false)
//   next()
// })

apolloServer.applyMiddleware({
  app
})

const httpServer = http.createServer(app)

apolloServer.installSubscriptionHandlers(httpServer)

export const { graphqlPath, subscriptionsPath } = apolloServer
export { httpServer }