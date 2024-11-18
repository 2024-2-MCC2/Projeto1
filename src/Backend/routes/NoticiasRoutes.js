const express = require('express');
const router = express.Router();
const noticiasController = require("../controllers/NoticiasController");
const upload = require('../config/multerConfig');

// Middleware de log geral
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    console.log('Parâmetros:', req.params);
    console.log('Query:', req.query);
    console.log('Body:', req.body);
    if (req.files) {
        console.log('Arquivos recebidos:', req.files);
    }
    next();
});

// Rotas
router.get('/', noticiasController.getAllNoticias);
router.get('/:id', noticiasController.getNoticiaById);

router.post(
    '/',
    upload.fields([
        { name: 'Imagem', maxCount: 1 },
        { name: 'Texto', maxCount: 1 }
    ]),
    (req, res, next) => {
        if (req.files) {
            console.log('Arquivos recebidos:');
            if (req.files.Imagem) {
                console.log('Imagem:', req.files.Imagem[0]);
            }
            if (req.files.Texto) {
                console.log('Texto:', req.files.Texto[0]);
            }
        }
        if (!req.body.Titulo) {
            console.warn('Campo Titulo ausente.');
        }
        next();
    },
    noticiasController.createNoticia
);

router.put(
    '/:id',
    upload.fields([
        { name: 'Imagem', maxCount: 1 },
        { name: 'Texto', maxCount: 1 }
    ]),
    (req, res, next) => {
        console.log(`Atualizando notícia com ID: ${req.params.id}`);
        if (req.files) {
            console.log('Arquivos recebidos:', req.files);
        }
        console.log('Dados do corpo:', req.body);
        if (!req.files || (!req.files.Imagem && !req.files.Texto)) {
            console.warn('Arquivos ausentes ou não processados corretamente.');
        }
        next();
    },
    noticiasController.updateNoticias
);

router.delete('/:id', (req, res, next) => {
    console.log(`[${new Date().toISOString()}] DELETE /:id chamado com ID: ${req.params.id}`);
    next();
}, noticiasController.deleteNoticia);

// Middleware de erro
router.use((err, req, res, next) => {
    console.error(`[${new Date().toISOString()}] Erro durante a requisição:`, err.message);
    console.error('Stack trace:', err.stack);
    res.status(err.status || 500).json({ error: err.message || 'Erro interno do servidor' });
});

module.exports = router;

