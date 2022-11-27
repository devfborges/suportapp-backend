const express = require('express')
const route = express.Router()
const Called = require('../models/called')

route.get('/', (req, res) => {

    Called.find()
    .then( data => {
        res.status(200).json(data)
    }).catch( err => {
        res.status(500).json({
            status: "Error", ...err
        })
    })

})

module.exports = app => app.use('/app', route)