const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const noticiasController = require("../controllers/NoticiasController");

// Configuração de upload para imagens
const imageStorage = multer.diskStorage({
    destination: './uploads/ImagensNoticias',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

// Configuração de upload para textos
const textStorage = multer.diskStorage({
    destination: './uploads/TextosNoticias',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const uploadImage = multer({ storage: imageStorage });
const uploadText = multer({ storage: textStorage });

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