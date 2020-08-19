const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const port = process.env.PORT || 4000
const app = express()


// middleware - JSON parsing
app.use(express.json());


//middleware - API routes
app.use(cors())
app.use('/api/v1/mygifs', routes.gifs)



//connection
app.listen(port, () => console.log(`Server is running on ${port}`))