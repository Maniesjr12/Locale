const express = require('express')
const { getStates, getState } = require('../controllers/state')

const stateRoutes = express.Router()

stateRoutes.get('/search/states', getStates)


stateRoutes.get('/search/state', getState)




module.exports = stateRoutes