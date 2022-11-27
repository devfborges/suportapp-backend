const express = require('express')
const app = express()

app.use(express.urlencoded({ extended:false }))
require('dotenv').config()
require('./controllers/appController')(app)

app.listen(process.env.PORT, () => {
    console.log(`Running server on port: ${process.env.PORT}`)
})