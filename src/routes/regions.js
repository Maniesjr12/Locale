const express = require('express')
const { getAllRegion, getAllRegionByCode } = require('../controllers/regions')

const regionsRoutes = express.Router()



regionsRoutes.get('/search/regions', getAllRegion )

regionsRoutes.get('/search/region',getAllRegionByCode )


module.exports = regionsRoutes