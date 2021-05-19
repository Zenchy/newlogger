require(`dotenv`).config()
const app = require('./server')
require(`./database`)

app.listen(app.get(`port`),()=>{
  console.log(`Zenchy is on port ${app.get(`port`)}`)
})