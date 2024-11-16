const express = require("express");
const router = express.Router();
const db = require("../db");

// Rota para buscar os detalhes de uma notícia específica pelo ID
router.get("/:id", (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM Noticias WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.error("Erro ao acessar o banco:", err);
            return res.status(500).json({ message: "Erro ao acessar o banco de dados." });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: "Notícia não encontrada." });
        }

        res.json(result[0]); // Retorna os detalhes da notícia
    });
});

// Rota para buscar o conteúdo de um arquivo específico associado à notícia
router.get("/:id/conteudo", (req, res) => {
    const { id } = req.params;

    db.query("SELECT Texto FROM Noticias WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.error("Erro ao acessar o banco:", err);
            return res.status(500).json({ message: "Erro ao acessar o banco de dados." });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: "Notícia não encontrada." });
        }

        const filePath = path.join(__dirname, "../frontend/public", result[0].Texto);
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                console.error("Erro ao ler o arquivo:", err);
                return res.status(500).json({ message: "Erro ao ler o arquivo." });
            }

            res.json({ content: data });
        });
    });
});

module.exports = router;