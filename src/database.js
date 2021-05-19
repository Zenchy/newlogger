const mongoose = require('mongoose')

const MONGO_URL = `mongodb://localhost/newlogger`

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})