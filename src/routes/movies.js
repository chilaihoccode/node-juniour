const express = require('express')
const router = express.Router()
const movieController = require('../controller/MovieController')

router.get('/create',movieController.create)
router.post('/store',movieController.store)
router.get('/:id/edit',movieController.edit)
router.post('/handle-form',movieController.handleForm)
router.put('/:id',movieController.update)
router.delete('/:id',movieController.destroy)
router.delete('/:id/force',movieController.forceDestroy)
router.patch('/:id/restore',movieController.restore)
router.get('/:slug',movieController.show)

module.exports = router
