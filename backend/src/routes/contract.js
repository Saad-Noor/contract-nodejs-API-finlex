const express = require('express')
const routes = express.Router()
const contract = require('./../controller/contract')

routes.route('/getContracts')
    .get(contract.List)
routes.route('/createContracts')
    .post(contract.Create)


module.exports = routes