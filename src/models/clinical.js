const mongoose = require('../config/db.connect')

const clinicalSchema = new mongoose.Schema({

    idClinic: {
        type: String,
        require: true,
    },
    clinical: {
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
