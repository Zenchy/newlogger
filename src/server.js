const express = require('express')
const path = require('path')
const UserControl = require(`./controllers/user.controllers`)

//Initialization
const app =  express()

//Settings
app.set(`port`, process.env.PORT || 8000)
app.set('views', path.join(__dirname, `views`))

//Middlewares
app.use(express.urlencoded({extended:false}))

//Global variables

//Routes
app.get('/',require(`./routes/users.routes`))

//Static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app