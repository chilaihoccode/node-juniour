const express = require('express')
const router = express.Router()
const meController = require('../controller/meController')

router.get('/stored/movies',meController.storedMovies)

module.exports = router