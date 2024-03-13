const express = require('express')
const stateRoutes = require('./routes/state')
const lgasRoutes = require('./routes/lgas')
const regionsRoutes = require('./routes/regions')

const app = express()



app.use(express.json())

app.use('/api', stateRoutes)
app.use('/api', lgasRoutes)
app.use('/api', regionsRoutes)


const port = 3000 || process.env.PORT


app.listen(port,()=>{
    console.log(`App runing on ${port}`)
})

