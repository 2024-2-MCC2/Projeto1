require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session'); 
const path = require('path');
const noticiasRoutes = require('./routes/NoticiasRoutes');
const authRoutes = require('./routes/AutenticarRoutes');

const app = express();

// Configuração do CORS
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // Origem do frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Cookies de sessão
}));
console.log('CORS configurado para origem:', process.env.CORS_ORIGIN || 'http://localhost:3000');

// Middleware para leitura do JSON
app.use(express.json());

// Configuração de Sessão
app.use(session({
    secret: 'seuSegredoAqui', // Substitua por uma chave secreta segura
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: process.env.NODE_ENV === 'production', // Ativo em produção
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // Ajuste de compatibilidade
        httpOnly: true // Segurança contra scripts
    }
}));

// Rota de teste
app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

// Servir arquivos estáticos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rotas
app.use('/api/noticias', noticiasRoutes);
app.use('/api/auth', authRoutes);

// Porta do servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
