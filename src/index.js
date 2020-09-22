import mongoose from 'mongoose';
import { graphqlPath, httpServer, subscriptionsPath } from './server/app';
import { PORT } from './server/config'
import { dbLink } from './server/config/mongoose';


const start = () => {
  try {
    mongoose.connect(dbLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  
    httpServer.listen(PORT, () => {
      console.log(`Server ready at http://localhost:${PORT}${graphqlPath}`)
      console.log(`Subscriptions ready at ws://localhost:${PORT}${subscriptionsPath}`)
    })
  } catch(e) {
    console.log(e)
    process.exit()
  }
}

start()