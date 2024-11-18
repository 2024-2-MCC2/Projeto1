const bcrypt = require('bcryptjs');
const db = require('../db');

exports.register = async (req, res) => {
    const { Nome, Sobrenome, DataDeNascimento, RG, CPF, CEP, Estado, Cidade, Rua, Complemento, Bairro, Celular, Email, Senha } = req.body;

    try {
        console.log('Iniciando registro de usuário:', Email);
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Senha, salt);

        await db.query(
            'INSERT INTO Usuarios (Nome, Sobrenome, DataDeNascimento, RG, CPF, CEP, Estado, Cidade, Rua, Complemento, Bairro, Celular, Email, Senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [Nome, Sobrenome, DataDeNascimento, RG, CPF, CEP, Estado, Cidade, Rua, Complemento, Bairro, Celular, Email, hashedPassword]
        );

        console.log('Usuário cadastrado com sucesso:', Email);
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ error: 'Erro ao cadastrar o usuário' });
    }
};

exports.login = async (req, res) => {
    const { Email, Senha } = req.body;

    try {
        console.log('Iniciando login para:', Email);

        const [rows] = await db.query('SELECT * FROM Usuarios WHERE Email = ?', [Email]);
        const user = rows[0];

        if (!user) {
            console.error('Usuário não encontrado:', Email);
            return res.status(401).json({ auth: false, message: 'Usuário não encontrado' });
        }

        console.log('Usuário encontrado:', user);

        const isPasswordValid = await bcrypt.compare(Senha, user.Senha);
        if (!isPasswordValid) {
            console.error('Senha incorreta para:', Email);
            return res.status(401).json({ auth: false, message: 'Senha incorreta' });
        }

        req.session.userId = user.id; // Armazena o ID do usuário na sessão
        console.log('Login bem-sucedido para:', Email);
        res.json({ auth: true, message: 'Login realizado com sucesso!' });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ auth: false, message: 'Erro ao autenticar o usuário' });
    }
};

exports.forgotPassword = async (req, res) => {
    const { Email, novaSenha } = req.body;

    try {
        console.log('Iniciando atualização de senha para:', Email);

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(novaSenha, salt);

        const [result] = await db.query('UPDATE Usuarios SET Senha = ? WHERE Email = ?', [hashedPassword, Email]);
        if (result.affectedRows === 0) {
            console.error('Usuário não encontrado para atualização de senha:', Email);
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        console.log('Senha atualizada com sucesso para:', Email);
        res.json({ message: 'Senha atualizada com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar senha:', error);
        res.status(500).json({ error: 'Erro ao atualizar a senha' });
    }
};
