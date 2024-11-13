const mysql = require('mysql2/promise'); // Usando a versão promise do mysql2
require('dotenv').config();

// Criando um pool de conexões
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306,
    // ssl: {
    //     rejectUnauthorized: true
    // }
});

// Função para testar a conexão e realizar uma consulta simples
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Conexão ao DB estabelecida com sucesso!');

        // Executa uma consulta simples para verificar a conexão
        const [rows] = await connection.query('SELECT 1 + 1 AS solution');
        console.log('Resultado da consulta:', rows[0].solution); // Deve retornar 2

        connection.release(); // Libera a conexão de volta ao pool
    } catch (err) {
        console.error('Erro ao conectar ao DB:', err);
    }
}

// Chama a função para testar a conexão
testConnection();

// Exporta o pool para uso em outras partes da aplicação
module.exports = pool;