import { User } from "../model"
import { AuthenticationError, ApolloError } from "apollo-server-express"
import bcryptjs from 'bcryptjs';


//no validation ((
export const signUp = async (_, userData) => {
  try {
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
  } catch(e) {
    console.log(e)
    throw new ApolloError('server Error')
  }
}