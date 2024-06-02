const express = require('express')
const router = express.Router()
const movieController = require('../controller/MovieController')

router.get('/:slug',movieController.show)

module.exports = router