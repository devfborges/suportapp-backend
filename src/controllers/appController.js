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

route.post('/add/chamado', (req, res) => {

    let { clinical, suport, description } = req.body

    if(clinical || suport || description){

        Called.create({ clinical, suport, description })
        .then( doc => {
            res.status(201).json(doc)
        }).catch( err => {
            res.status(400).json({ status: "Failed", ...err })
        })
    }
    else {
        res.status(400).json({
            status: "Failed",
            message: "A definir"
        })
    }

})

route.delete('/chamado/:id', (req, res) => {

    let id = req.params.id

    Called.findByIdAndDelete(id)
    .then( doc => {
        res.status(202).json(doc)
    }).catch( err => {
        res.status(404).json(err)
    })

})

module.exports = app => app.use('/app', route)