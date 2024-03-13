const express = require('express')
const { getLgasInState } = require('../controllers/lgas')

const lgasRoutes = express.Router()

// stateRoutes.get('/search/states', getStates)


lgasRoutes.get('/search/:state/lga', getLgasInState)




module.exports = lgasRoutes