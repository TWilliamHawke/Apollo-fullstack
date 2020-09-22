//Documents and Settings

export const setUser = (req, res, next) => {
  req.userName = 'temp'

  next()
}