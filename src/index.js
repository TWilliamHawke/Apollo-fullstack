import mongoose from 'mongoose';
import { app, graphqlPath } from './server/app';
import { PORT } from './server/config'
import { dbLink } from './server/config/mongoose';


const start = () => {
  try {
    mongoose.connect(dbLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  
    app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}${graphqlPath}`))
  } catch(e) {
    console.log(e)
    process.exit()
  }
}

start()