const bcrypt = require('bcryptjs');
const db = require('../db');

exports.register = async (req, res) => {
    const { Nome, Sobrenome, DataDeNascimento, RG, CPF, CEP, Estado, Cidade, Rua, Complemento, Bairro, Celular, Email, Senha } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Senha, salt);

        await db.query('INSERT INTO Usuarios (Nome, Sobrenome, DataDeNascimento, RG, CPF, CEP, Estado, Cidade, Rua, Complemento, Bairro, Celular, Email, Senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [Nome, Sobrenome, DataDeNascimento, RG, CPF, CEP, Estado, Cidade, Rua, Complemento, Bairro, Celular, Email, hashedPassword]);
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar o usuário' });
    }
};


// Função de login sem geração de token
exports.login = async (req, res) => {
    const { Email, Senha } = req.body;

    try {
        const [rows] = await db.query('SELECT * FROM Usuarios WHERE Email = ?', [Email]);
        const user = rows[0];
        
        if (!user) {
            return res.status(401).json({ auth: false, message: 'Usuário não encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(Senha, user.Senha);
        if (!isPasswordValid) {
            return res.status(401).json({ auth: false, message: 'Senha incorreta' });
        }

        req.session.userId = user.id; // Armazena o ID do usuário na sessão
        res.json({ auth: true, message: 'Login realizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ auth: false, message: 'Erro ao autenticar o usuário' });
    }
};

exports.forgotPassword = async (req, res) => {
    const { Email, novaSenha } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(novaSenha, salt);

        const [result] = await db.query('UPDATE Usuarios SET Senha = ? WHERE Email = ?', [hashedPassword, Email]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json({ message: 'Senha atualizada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a senha' });
    }
};