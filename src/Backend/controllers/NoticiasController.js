const db = require('../db');

exports.getAllNoticias = async (req, res) => {
    try {
        const [noticias] = await db.query('SELECT * FROM Noticias');
        res.status(200).json(noticias);
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        res.status(500).send('Erro no servidor');
    }
};

exports.getNoticiaById = async (req, res) => {
    const { id } = req.params;
    try {
        const [noticia] = await db.query('SELECT * FROM Noticias WHERE id = ?', [id]);
        if (noticia.length > 0) {
            res.status(200).json(noticia[0]);
        } else {
            res.status(404).send('Notícia não encontrada');
        }
    } catch (error) {
        console.error('Erro ao buscar notícia:', error);
        res.status(500).send('Erro no servidor');
    }
};

exports.createNoticia = async (req, res) => {
    const { Titulo, Entidade, Autor, Data, TempoDeLeitura, Chamada, LinkURL } = req.body;

    // Arquivo de imagem e texto
    const Imagem = req.file && req.file.mimetype.startsWith('image/') ? req.file.filename : null;
    const Texto = req.file && req.file.mimetype === 'text/plain' ? req.file.filename : null;

    try {
        const [result] = await db.query(
            'INSERT INTO Noticias (Titulo, Entidade, Autor, Data, TempoDeLeitura, Chamada, LinkURL, Imagem, Texto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [Titulo, Entidade, Autor, Data, TempoDeLeitura, Chamada, LinkURL, Imagem, Texto]
        );
        res.status(201).send(`Notícia criada com ID: ${result.insertId}`);
    } catch (error) {
        console.error('Erro ao criar notícia:', error);
        res.status(500).send('Erro no servidor');
    }
};

exports.updateNoticias = async (req, res) => {
    const id = req.params.id;
    const { Titulo, Entidade, Autor, Data, TempoDeLeitura, Chamada, LinkURL } = req.body;
    const Imagem = req.file && req.file.mimetype.startsWith('image/') ? req.file.filename : null;
    const Texto = req.file && req.file.mimetype === 'text/plain' ? req.file.filename : null;

    try {
        const fields = [];
        const values = [];

        if (Titulo) {
            fields.push('Titulo = ?');
            values.push(Titulo);
        }
        if (Entidade) {
            fields.push('Entidade = ?');
            values.push(Entidade);
        }
        if (Autor) {
            fields.push('Autor = ?');
            values.push(Autor);
        }
        if (Data) {
            fields.push('Data = ?');
            values.push(Data);
        }
        if (TempoDeLeitura) {
            fields.push('TempoDeLeitura = ?');
            values.push(TempoDeLeitura);
        }
        if (Chamada) {
            fields.push('Chamada = ?');
            values.push(Chamada);
        }
        if (LinkURL) {
            fields.push('LinkURL = ?');
            values.push(LinkURL);
        }
        if (Imagem) {
            fields.push('Imagem = ?');
            values.push(Imagem);
        }
        if (Texto) {
            fields.push('Texto = ?');
            values.push(Texto);
        }

        if (fields.length === 0) {
            return res.status(400).send('Nenhum campo para atualizar');
        }

        values.push(id);
        const query = `UPDATE Noticias SET ${fields.join(', ')} WHERE id = ?`;
        const [result] = await db.query(query, values);

        if (result.affectedRows > 0) {
            res.status(200).send('Notícia atualizada com sucesso');
        } else {
            res.status(404).send('Notícia não encontrada');
        }
    } catch (err) {
        console.error('Erro ao atualizar a notícia: ', err);
        res.status(500).send(err.message);
    }
};

exports.deleteNoticia = async (req, res) => {
    const id = req.params.id; // Captura o ID da URL
    console.log('Tentativa de deletar notícia com ID:', id);

    try {
        const [result] = await db.query('DELETE FROM Noticias WHERE id = ?', [id]);
        console.log('Resultado da exclusão:', result);

        if (result.affectedRows > 0) {
            res.status(200).send('Notícia deletada com sucesso');
        } else {
            res.status(404).send('Notícia não encontrada');
        }
    } catch (error) {
        console.error('Erro ao deletar notícia:', error);
        res.status(500).send('Erro no servidor');
    }
};