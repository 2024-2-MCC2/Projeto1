require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db"); // Configuração do banco de dados
const noticiasRoutes = require("./Routes/noticiasRoutes"); // Importa o arquivo de rotas

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Usar as rotas de notícias
app.use("/", noticiasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
