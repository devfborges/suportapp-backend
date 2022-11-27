const mongoose = require('../config/db.connect')

const calledSchema = new mongoose.Schema({

    clinical: {
        type: String,
        require: true,
    },
    suport: {
        type: String,
        require: true,
        enum: ['João Pedro', 'Fernando', 'Ítalo', 'João Felipe']
    },
    description: {
        type: String,
        require: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }

})

const Called = mongoose.model('Called', calledSchema)

module.exports = Called
