import mongoose from 'mongoose';
import { graphqlPath, httpServer, subscriptionsPath } from './core/app';
import { PORT } from './core/config'
import { dbLink } from './core/config/mongoose';


const start = () => {
  try {
    if(!dbLink) {
      throw new Error("MongoDB link not exist please paste your link into server/core/config/mongoose.js")
    }
    
    const realLink = Array.isArray(dbLink) ? (dbLink.link.join('') + 'rity') : dbLink;

    mongoose.connect(realLink, {
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