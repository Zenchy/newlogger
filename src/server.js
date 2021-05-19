const express = require('express')
const path = require('path')

//Initialization
const app =  express()

//Settings
app.set(`port`, process.env.PORT || 8000)
app.set('views', path.join(__dirname, `/views`))

module.exports = app