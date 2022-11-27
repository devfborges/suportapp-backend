const Clinical = require('../models/clinical')

const clinical = {

    get: function(req, res) {

        Clinical.find()
        .then( data => {
            res.status(200).json(data)
        }).catch( err => {
            res.status(500).json({
                status: "Error", ...err
            })
        })

    },

    add: function(req, res){

        let { idClinical, clinicalName } = req.body

        if(idClinical || clinicalName){

            Clinical.create({ idClinical, clinicalName })
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

        Clinical.findByIdAndDelete(id)
        .then( doc => {
            res.status(202).json(doc)
        }).catch( err => {
            res.status(404).json(err)
        })

    },

    edit: function(req, res)  {

        let id = req.params.id
        let { idClinical, clinicalName } = req.body
    
        Clinical.findByIdAndUpdate(id, { idClinical, clinicalName })
        .then( doc => {
            res.status(202).json(doc)
        }).catch( err => {
            res.status(404).json(err)
        })

    }

}

module.exports = clinical