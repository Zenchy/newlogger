const express = require('express')

//Initialization
const app =  express()

//Settings
app.set(`port`, process.env.PORT || 8000)

module.exports = app