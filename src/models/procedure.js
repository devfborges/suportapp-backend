const mongoose = require('../config/db.connect')

const procedureSchema = new mongoose.Schema({

    description: {
        type: String,
        require: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }

})

const Procedure = mongoose.model('Procedure', procedureSchema)

module.exports = Procedure