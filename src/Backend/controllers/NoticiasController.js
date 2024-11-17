const db = require('../db');

// Função para processar campos
function processaCampos(body, files) {
    const campos = { ...body };

    if (files?.Imagem) {
        campos.Imagem = files.Imagem[0].filename;
    }
    if (files?.Texto) {
        campos.Texto = files.Texto[0].filename;
    }

    return campos;
}

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
    try {
        console.log('Dados do corpo recebidos:', req.body);
        console.log('Arquivos recebidos:', req.files);

        const campos = processaCampos(req.body, req.files);

        // Validação de campos obrigatórios
        if (!campos.Titulo || !campos.Entidade || !campos.Autor || !campos.Data ||
            !campos.TempoDeLeitura || !campos.Chamada || !campos.LinkURL || 
            !campos.Referencia || !campos.Texto || !campos.Imagem) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        // Validação do tipo de dado (TempoDeLeitura deve ser um número inteiro)
        const tempoDeLeitura = parseInt(campos.TempoDeLeitura, 10);
        if (isNaN(tempoDeLeitura)) {
            return res.status(400).json({ error: 'TempoDeLeitura deve ser um número inteiro' });
        }

        // Validação do tamanho máximo dos campos (400 caracteres)
        const camposComLimite = ['Titulo', 'Entidade', 'Autor', 'Chamada', 'LinkURL', 'Referencia', 'Texto', 'Imagem'];
        for (const campo of camposComLimite) {
            if (campos[campo].length > 400) {
                return res.status(400).json({ error: `O campo ${campo} não pode exceder 400 caracteres` });
            }
        }

        // Inserção no banco
        const [result] = await db.query(
            'INSERT INTO Noticias (Titulo, Entidade, Autor, Data, TempoDeLeitura, Chamada, LinkURL, Imagem, Texto, Referencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
                campos.Titulo,
                campos.Entidade,
                campos.Autor,
                campos.Data,
                tempoDeLeitura,
                campos.Chamada,
                campos.LinkURL,
                campos.Imagem,
                campos.Texto,
                campos.Referencia, // Adicionado o campo Referencia
            ]
        );

        console.log('Resultado da query:', result);
        res.status(201).send(`Notícia criada com ID: ${result.insertId}`);
    } catch (error) {
        console.error('Erro ao criar notícia:', error.message);
        res.status(500).send('Erro no servidor');
    }
};


exports.updateNoticias = async (req, res) => {
    try {
        const { id } = req.params;
        const campos = processaCampos(req.body, req.files);

        const fields = Object.keys(campos)
            .map((campo) => `${campo} = ?`)
            .join(', ');
        const values = Object.values(campos);

        if (fields.length === 0) {
            return res.status(400).send('Nenhum campo para atualizar');
        }

        values.push(id);
        const query = `UPDATE Noticias SET ${fields} WHERE id = ?`;
        const [result] = await db.query(query, values);

        if (result.affectedRows > 0) {
            res.status(200).send('Notícia atualizada com sucesso');
        } else {
            res.status(404).send('Notícia não encontrada');
        }
    } catch (error) {
        console.error('Erro ao atualizar notícia:', error);
        res.status(500).send('Erro no servidor');
    }
};

exports.deleteNoticia = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.query('DELETE FROM Noticias WHERE id = ?', [id]);

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