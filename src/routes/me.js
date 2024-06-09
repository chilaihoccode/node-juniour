const express = require('express')
const router = express.Router()
const meController = require('../controller/meController')

router.get('/stored/movies',meController.storedMovies)
router.get('/stored/trash',meController.trashMovies)


module.exports = router