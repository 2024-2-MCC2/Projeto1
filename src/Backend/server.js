require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const noticiasRoutes = require('./routes/NoticiasRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Servir arquivos estáticos

// Rotas
app.use('/api/noticias', noticiasRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
