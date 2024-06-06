const express = require('express')
const router = express.Router()
const movieController = require('../controller/MovieController')

router.get('/create',movieController.create)
router.post('/store',movieController.store)
router.get('/:slug',movieController.show)

module.exports = router