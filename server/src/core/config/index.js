export const PORT = 4000;
export const USER_SECRET = 'another_user_secret'
export const dbLink = 'mongodb+srv://twilliam:cf9nyvB3BOnHukte@cluster0.qhgcr.mongodb.net/APOLLO-BLOG?retryWrites=true&w=majority'

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