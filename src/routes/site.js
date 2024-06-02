const express = require('express')
const router = express.Router()
const siteController= require('../controller/SitesController')

router.get('/search',siteController.index)
router.get('/',siteController.index)

module.exports = router