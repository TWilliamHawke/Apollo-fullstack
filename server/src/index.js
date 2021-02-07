import mongoose from 'mongoose';
import { graphqlPath, httpServer, subscriptionsPath } from './core/app';
import { PORT } from './core/config'
import { dbLink } from './core/config/mongoose';


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