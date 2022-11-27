const Procedure = require('../models/procedure')

const procedure = {

    get: function(req, res) {

        Procedure.find()
        .then( data => {
            res.status(200).json(data)
        }).catch( err => {
            res.status(500).json({
                status: "Error", ...err
            })
        })

    },

    add: function(req, res){

        let { description } = req.body

        if(description){

            Procedure.create({ description })
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

    },

    remove: function(req, res) {

        let id = req.params.id

        Procedure.findByIdAndDelete(id)
        .then( doc => {
            res.status(202).json(doc)
        }).catch( err => {
            res.status(404).json(err)
        })

    },

    edit: function(req, res)  {

        let id = req.params.id
        let { description } = req.body
    
        Procedure.findByIdAndUpdate(id, { description })
        .then( doc => {
            res.status(202).json(doc)
        }).catch( err => {
            res.status(404).json(err)
        })

    }

}

module.exports = procedure