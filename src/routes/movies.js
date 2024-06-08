const express = require('express')
const router = express.Router()
const movieController = require('../controller/MovieController')

router.get('/create',movieController.create)
router.post('/store',movieController.store)
router.get('/:id/edit',movieController.edit)
router.put('/:id',movieController.update)
router.delete('/:id',movieController.destroy)
router.get('/:slug',movieController.show)

module.exports = router
