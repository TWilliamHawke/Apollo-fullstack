export const PORT = 4000;
import { USER_SECRET } from './auth';

export const sessionSettings = {
  key: 'token',
  name: 'session',
  secret: USER_SECRET,
  resave: false,
  rolling: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 15 * 60 * 1000
  },
};

export const corsOptions = {
  origin: 'http://localhost:5000',
  credentials: true,
}