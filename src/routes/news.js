const express = require('express')
const router = express.Router()
const newsController = require('../controller/NewsController')

// router.use('/:slug',newsController.show)
router.get('/',newsController.index)

module.exports = router;