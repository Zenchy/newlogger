const mongoose = require('mongoose')

// const LHOST = process.env.MONGO_HOST
// const DB = process.env.MONGO_DB

//const MONGO_URL = `mongodb://${LHOST}/${DB}`
const MONGO_ATLAS = process.env.MONGO_ATLAS


mongoose.connect(MONGO_ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(db=> console.log('Database is working'))
.catch(error=> console.log('This is the error',error))

