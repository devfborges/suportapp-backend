const express = require('express')
const route = express.Router()
const called = require('../controllers/calledController')
const clinical = require('../controllers/clinicalController')
const procedure = require('../controllers/procedureController')

route.get('/chamados', called.get)
route.post('/add/chamado', called.add)
route.delete('/remove/chamado/:id', called.remove)
route.put('/edit/chamado/:id', called.edit)

route.get('/clinicas', clinical.get)
route.post('/add/clinica', clinical.add)
route.delete('/remove/clinica/:id', clinical.remove)
route.put('/edit/clinica/:id', clinical.edit)

route.get('/descricoes', procedure.get)
route.post('/add/descricao', procedure.add)
route.delete('/remove/descricao/:id', procedure.remove)
route.put('/edit/descricao/:id', procedure.edit)

module.exports = app => app.use('/app', route)