const express = require('express')
const app = express()
require('dotenv').config()

// app.use(express.urlencoded({ extended:false }))
require('./controllers/appController')(app)

app.listen(process.env.PORT, () => {
    console.log(`Running server on port: ${process.env.PORT}`)
})