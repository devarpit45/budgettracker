const express = require('express')

const routes = express.Router()

const budgetclt = require('../controller/budgetcontroller')

routes.get('/',budgetclt.budget)

routes.post('/budgetAdd',budgetclt.addbudget)

routes.post('/Addexpense',budgetclt.Addexpense)

routes.get('/deldata',budgetclt.deldata)

routes.get('/updateexp',budgetclt.updateexp)
routes.post('/editexp',budgetclt.editexp)

routes.get('/updateincome',budgetclt.updateincome)

module.exports = routes