const express = require('express')
const routes = express.Router()

const contract = require('./contract')

routes.use('/api/contract', contract)


module.exports = routes