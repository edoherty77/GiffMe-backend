const express = require('express')
const routes = require('./routes')

const port = process.env.PORT || 4000
const app = express()




//middleware - API routes
app.use('/', routes.gifs)



//connection
app.listen(port, () => console.log(`Server is running on ${port}`))