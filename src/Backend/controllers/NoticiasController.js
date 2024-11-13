const db = require('../db')

exports.createNoticia = async(req, res) =>{
    const {Titulo, Entidade, Autor, Data, TempoDeLeitura, Chamada, LinkURL, Referencia} = req.body
    const Texto = req.file.filename
    const Imagem = req.file.filename
    try{
        const [result] = await db.query('INSERT INTO noticias (Titulo, Entidade, Autor, Data, TempoDeLeitura, Chamada, LinkURL, Referencia, Texto, Imagem) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [Titulo, Entidade, Autor, Data, TempoDeLeitura, Chamada, LinkURL, Referencia, Texto, Imagem])
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}
exports.getAllNoticia = async(req, res) =>{
    try{
        const [noticias] = await db.query('SELECT * FROM noticias')
        res.status(200).json(noticias)
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}
exports.getNoticiaByID = async(req, res) =>{
    const id = req.params.id
    try{
        const [noticias] = await db.query('SELECT * FROM noticias WHERE id =?', [id])
        if(noticias.length >0){
            res.status(200).json(noticias[0])
        } else {
            res.status(404).send('Noticia não encontrada')
        }
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}
exports.updateNoticia = async(req, res) =>{
    const id = req.params.id
    const {Titulo, Entidade, Autor, Data, TempoDeLeitura, Chamada, LinkURL, Referencia} = req.body
    const Imagem = req.file ? req.file.filename : null  
    const Texto = req.file ? req.file.filename : null    
    try{
        const fields = []
        const values = []
        if(Titulo){
            fields.push('Titulo = ?')
            values.push(Titulo)
        }
        if(Entidade){
            fields.push('Entidade = ?')
            values.push(Entidade)
        }
        if(Autor){
            fields.push('Autor = ?')
            values.push(Autor)
        }
        if(Data){
            fields.push('Data = ?')
            values.push(Data)
        }
        if(TempoDeLeitura){
            fields.push('TempoDeLeitura = ?')
            values.push(TempoDeLeitura)
        }
        if(Chamada){
            fields.push('Chamada = ?')
            values.push(Chamada)
        }
        if(LinkURL){
            fields.push('LinkURL = ?')
            values.push(LinkURL)
        }
        if(Referencia){
            fields.push('Referencia = ?')
            values.push(Referencia)
        }
        if(Imagem){
            fields.push('Imagem = ?')
            values.push(Imagem)
        }
        if(fields.length === 0){
            return res.status(400).send('Nenhum campo para atualizar')
        }
        values.push(id)
        const query = `UPDATE noticias SET ${fields.join(', ')} WHERE id = ?`
        const [result] = await db.query(query, values)
        if(result.affectedRows > 0){
            res.status(200).send('Noticia atualizada com sucesso')
        } else {
            res.status(404).send('Noticia não encontradA')
        }
    } catch (err){
        console.error('Erro ao atualizar o personagem: ', err)
        res.status(500).send(err.message)
    }
}
exports.deleteNoticia = async(req, res) =>{
    const id = req.params.id    
    try{
        const [result] = await db.query('DELETE FROM Noticia WHERE id = ?', [id])
        if(result.affectedRows > 0){
            res.status(200).send('Notica deletada com sucesso')
        } else {
            res.status(404).send('Noticia não encontrada')
        }
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}