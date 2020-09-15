import express from 'express'
import { apolloServer } from './apolloServer'
import cors from 'cors';
import { corsOptions } from './config';
import cookieParser from 'cookie-parser';

export const app = express()

app.use(cookieParser())
app.use(cors(corsOptions))

// app.use((req, res, next) => {
//   console.log('data', req.cookies);
//   res.cookie('rememberme', '111', { expires: new Date(Date.now() + 900000), httpOnly: true});
//   res.setHeader('Access-Control-Allow-Origin', false)
//   next()
// })

apolloServer.applyMiddleware({
  app
})

export const { graphqlPath } = apolloServer