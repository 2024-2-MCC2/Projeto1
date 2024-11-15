const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost", // Ou o IP do servidor MySQL
    user: "root", // Nome de usuário do MySQL
    password: "22082000", // Senha do usuário
    database: "AliancaOceanica", // Nome do banco de dados
    port:3306,
});

db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar no banco de dados:", err);
        return;
    }
    console.log("Conectado ao banco de dados MySQL!");
});

// Rota para buscar todos as Noticias
app.get("/Noticias", (req, res) => {
    db.query("SELECT * FROM Noticias", (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Rota para buscar uma Noticia específica
app.get("/Noticias/:id", (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM Noticias WHERE id = ?", [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result[0]);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});