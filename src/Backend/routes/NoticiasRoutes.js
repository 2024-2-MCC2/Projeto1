const express = require('express');
const router = express.Router();
const noticiasController = require("../controllers/NoticiasController");
const uploadImage = require('../config/multerConfig');
const uploadText = require('../config/multerConfig');

// Rotas
router.get('/', noticiasController.getAllNoticias);
router.get('/:id', noticiasController.getNoticiaById);
router.post('/', uploadImage.single('Imagem'), uploadText.single('Texto'), noticiasController.createNoticia);
router.put('/:id', uploadImage.single('Imagem'), uploadText.single('Texto'), noticiasController.updateNoticias); // Atualizar
router.delete('/:id', (req, res, next) => {
    console.log('DELETE /:id chamado com ID:', req.params.id); // Adiciona log para verificar a rota
    next(); // Passa a requisição para o controlador
}, noticiasController.deleteNoticia);

module.exports = router;