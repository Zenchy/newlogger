const express = require('express')
const path = require('path')

//Initialization
const app =  express()

//Settings
app.set(`port`, process.env.PORT || 8000)
app.set('views', path.join(__dirname, `views`))

//Middlewares
app.use(express.urlencoded({extended:false}))

//Global variables

//Routes
app.get('/', (req,res)=>{
  res.send('Hello zenchy')
})

//Static files

module.exports = app