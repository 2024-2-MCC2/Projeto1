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
