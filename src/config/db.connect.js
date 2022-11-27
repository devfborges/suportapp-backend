const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.CONNECT_DB)
.then( doc => {
    console.log({
        status: "Sucessfull connection with database"
    })
}).catch( err => {
    console.log({
        status: "Connection Error",
        err
    })
})

module.exports = mongoose
