const express = require('express');
const router = express.Router();
const noticiasController = require('../controllers/NoticiasController');
const upload = require('../config/multerConfig');

// Criar uma nova notícia
router.post('/', upload.single('Texto'), noticiasController.createNoticia);

// Atualizar uma notícia existente
router.put('/:id', upload.single('Texto'), noticiasController.updateNoticia);

// Recuperar todas as notícias
router.get('/', noticiasController.getAllNoticia);

// Recuperar uma notícia específica pelo ID
router.get('/:id', noticiasController.getNoticiaByID);

// Deletar uma notícia pelo ID
router.delete('/:id', noticiasController.deleteNoticia);

module.exports = router;