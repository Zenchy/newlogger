const app = require('./server')

app.listen(app.get(`port`),()=>{
  console.log(`Zenchy is on port ${app.get(`port`)}`)
})