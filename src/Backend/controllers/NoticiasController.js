const express = require("express");
const router = express.Router();
const db = require("../db"); // Caminho para o arquivo de configuração do banco de dados

// Rota para buscar todas as notícias
router.get("/Noticias", (req, res) => {
    db.query("SELECT * FROM Noticias", (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Rota para buscar uma notícia específica
router.get("/Noticias/:id", (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM Noticias WHERE id = ?", [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result[0]);
    });
});

module.exports = router;
