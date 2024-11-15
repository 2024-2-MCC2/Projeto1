const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const db = require("../db");

// Rota para buscar o conteúdo de um arquivo específico
router.get("/:id/conteudo", (req, res) => {
    const { id } = req.params;

    db.query("SELECT Texto FROM Noticias WHERE id = ?", [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }

        if (result.length === 0) {
            return res.status(404).json({ message: "Notícia não encontrada" });
        }

        const filePath = path.join(__dirname, "../../frontend/public", result[0].Texto);

        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Erro ao ler o arquivo", error: err });
            }

            res.json({ content: data });
        });
    });
});

// Rota para buscar os detalhes de uma notícia
router.get("/:id", (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM Noticias WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).send(err);

        if (result.length === 0) {
            return res.status(404).json({ message: "Notícia não encontrada" });
        }

        const noticia = result[0];
        noticia.TextoURL = `http://localhost:3000/${noticia.Texto}`; // URL completa
        res.json(noticia);
    });
});

module.exports = router;
