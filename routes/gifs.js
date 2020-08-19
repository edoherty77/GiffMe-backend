//imports
const router = require('express').Router()
const ctrl = require('../controllers')

//routes
router.get('/', ctrl.gifs.index)


//exports
module.exports = router