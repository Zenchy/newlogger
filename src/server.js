const express = require('express')
const path = require('path')
const routes = require(`./routes/users.routes`)
const morgan = require('morgan')
const cors = require ('cors')


//Initialization
const app =  express()

//Settings
var corsOptions = {
  origin:  "http://localhost:4200",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.set(`port`, process.env.PORT || 8000)
app.set('views', path.join(__dirname, `views`))

//Middlewarea
app.use(cors(corsOptions))//cors({origin:"url_que_quiero"}) y encontes permite comunicacion con esa URL en concreto
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Global variables

//Routes
app.use('/api/', routes)

//Static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app