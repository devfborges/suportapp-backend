const mongoose = require('../config/db.connect')

const clinicalSchema = new mongoose.Schema({

    idClinical: {
        type: Number,
        require: true,
    },
    clinicalName: {
        type: String,
        require: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }

})

const Clinical = mongoose.model('Clinical', clinicalSchema)

module.exports = Clinical
