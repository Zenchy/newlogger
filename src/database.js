const mongoose = require('mongoose')

const LHOST = process.env.MONGO_HOST
const DB = process.env.MONGO_DB

const MONGO_URL = `mongodb://${LHOST}/${DB}`

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(db=> console.log('Database is working'))
.catch(error=> console.log(error))