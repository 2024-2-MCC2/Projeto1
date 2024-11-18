require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session'); 
const path = require('path');
const noticiasRoutes = require('./routes/NoticiasRoutes');
const authRoutes = require('./routes/AutenticarRoutes');
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Importante para cookies de sessão funcionarem
}));

app.use(express.json());

app.use(session({
    secret: 'seuSegredoAqui', // Substitua por uma chave secreta segura
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: true,       // Necessário para HTTPS em produção
        sameSite: 'none'    // Necessário para que cookies funcionem entre domínios diferentes (Netlify e Azure)
    }
}));

app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Servir arquivos estáticos

// Rotas
app.use('/api/noticias', noticiasRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
