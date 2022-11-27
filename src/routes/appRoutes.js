const express = require('express')
const route = express.Router()
const called = require('../controllers/calledController')

route.get('/chamados', called.get)
route.post('/add/chamado', called.add)
route.delete('remove/chamado/:id', called.delete)
route.put('/edit/chamado/:id', called.edit)



module.exports = app => app.use('/app', route)