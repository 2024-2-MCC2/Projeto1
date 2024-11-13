require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5003;

app.use(cors());
app.use(express.json());

// Conexão ao banco de dados (exemplo com MySQL)
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

function buscarNoticiaPorId(id) {
    console.log("ID recebido para busca:", id);  // Verifique se o ID está correto

    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Noticias WHERE id = 1', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            console.log("Resultado da consulta por ID:", results);  // Verifique o conteúdo de results
            resolve(results[0]);  // Retorna a primeira notícia encontrada
        });
    });
}

// Rota para buscar uma notícia específica por ID
app.get('/api/Noticias/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const noticia = await buscarNoticiaPorId(id); // Espera a função assíncrona retornar
        if (noticia) {
            res.json(noticia);
        } else {
            res.status(404).send('Notícia não encontrada');
        }
    } catch (error) {
        console.error('Erro ao buscar notícia:', error);
        res.status(500).send('Erro ao buscar a notícia');
    }
});

// Rota para buscar todas as notícias
app.get('/api/Noticias', (req, res) => {
    db.query('SELECT * FROM Noticias', (err, result) => {
        if (err) {
            console.error('Erro ao buscar notícias:', err);
            res.status(500).send('Erro ao buscar notícias');
        } else {
            res.json(result);
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
