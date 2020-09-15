import { User } from "../model";
import { AuthenticationError, ApolloError } from "apollo-server-express";
import bcryptjs from 'bcryptjs';
import { USER_SECRET } from "../../../server/config/auth";
import jwt from 'jsonwebtoken'

export const login = async (_, userData, { res }) => {
  try {
    const {email, password } = userData;

    const user = await User.findOne({email})
    if(!user) throw new AuthenticationError("User with this email doesn't exists!")

    const checkPassword = await bcryptjs.compare(password, user.password)
    if(!checkPassword) throw new AuthenticationError("Password is Incorrect!")

    const token = jwt.sign({login: email}, USER_SECRET)
    
    res.cookie('token', token, { expires: new Date(Date.now() + 900000), httpOnly: true })

    return user.userName
  } catch(e) {
    console.log(e)
    throw new ApolloError('server Error')
  }
}