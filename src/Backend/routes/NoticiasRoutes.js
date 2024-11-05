const express = require('express')
const router = express.Router()
const noticiasController = require('../controllers/NoticiasController')
const upload = require('../config/multerConfig')

router.post('/', upload.single('Texto'),noticiasController.createNoticia)
router.post('/:id', upload.single('Texto'), noticiasController.updateNoticia)
router.get('/', noticiasController.getAllNoticia)
router.get('/:id', noticiasController.getNoticiaByID)
router.delete('/:id', noticiasController.deleteNoticia)

module.exports = router