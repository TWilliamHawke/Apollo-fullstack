import { User } from "../model";
import { AuthenticationError } from "apollo-server-express";
import bcryptjs from 'bcryptjs';
//import { USER_SECRET } from "../../../server/config/auth";
//import jwt from 'jsonwebtoken'

export const login = async (_, userData) => {
  const {email, password } = userData;

  const user = await User.findOne({email})
  if(!user) throw new AuthenticationError("User with this email doesn't exists!")

  const checkPassword = await bcryptjs.compare(password, user.password)
  if(!checkPassword) throw new AuthenticationError("Password is Incorrect!")

  // const token = jwt.sign({login: email}, USER_SECRET)
  // context.req.session.token = token

  return user.userName
}