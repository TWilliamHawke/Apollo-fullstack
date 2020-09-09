import { User } from "../model"
import { AuthenticationError } from "apollo-server-express"
import bcryptjs from 'bcryptjs';

export const signUp = async (_, userData) => {
  const {email, password, userName} = userData
  const checkExist = await User.findOne({email})
  
  if(checkExist) throw new AuthenticationError('User with this email already exists!')
  const hashedPassword = await bcryptjs.hash(password, 12)


  const user = new User({
    email,
    password: hashedPassword,
    userName
  })

  await user.save()
  return userName
}