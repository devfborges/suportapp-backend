const express = require('express')
const app = express()
require('./config/db.connect')
require('dotenv').config()

// app.use(express.urlencoded({ extended:false }))

app.listen(process.env.PORT, () => {
    console.log(`Running server on port: ${process.env.PORT}`)
})