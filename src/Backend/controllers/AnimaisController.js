const db = require('../db')

exports.createAnimal = async(req, res) =>{
    const {Nome, Nome_Cientifico, Localizacao, Populacao, Peso, Comprimento, Habitat, Ameacas, Importancia} = req.body
   const imagem_Habitat = req.file.filename
   const imagem_Animal = req.file.filename
    try{
        const [result] = await db.query('INSERT INTO animais (Nome, Nome_Cientifico, Localizacao, Populacao, Peso, Comprimento, Habitat, Ameacas, Importancia, imagem_Animal, imagem_Habitat) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [Nome, Nome_Cientifico, Localizacao, Populacao, Peso, Comprimento, Habitat, Ameacas, Importancia, imagem_Animal, imagem_Habitat])
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}
exports.getAllAnimal = async(req, res) =>{
    try{
        const [animais] = await db.query('SELECT * FROM animais')
        res.status(200).json(animais)
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}
exports.getAnimalByID = async(req, res) =>{
    const id = req.params.id
    try{
        const [animais] = await db.query('SELECT * FROM animais WHERE id =?', [id])
        if(noticias.length >0){
            res.status(200).json(animais[0])
        } else {
            res.status(404).send('Animal não encontrada')
        }
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}
exports.updateAnimal = async(req, res) =>{
    const id = req.params.id
    const {Nome, Nome_Cientifico, Localizacao, Populacao, Peso, Comprimento, Habitat, Ameacas, Importancia} = req.body
    const imagem_Animal = req.file ? req.file.filename : null    
    const imagem_Habitat = req.file ? req.file.filename : null 
    try{
        const fields = []
        const values = []
        if(Nome){
            fields.push('Nome = ?')
            values.push(Nome)
        }
        if(Nome_Cientifico){
            fields.push('Nome_Cientifico = ?')
            values.push(Nome_Cientifico)
        }
        if(Localizacao){
            fields.push('Localizacao = ?')
            values.push(Localizacao)
        }
        if(Populacao){
            fields.push('Populacao = ?')
            values.push(Populacao)
        }
        if(Peso){
            fields.push('Peso = ?')
            values.push(Peso)
        }
        if(Comprimento){
            fields.push('Comprimento = ?')
            values.push(Comprimento)
        }
        if(Habitat){
            fields.push('Habitat = ?')
            values.push(Habitat)
        }
        if(Importancia){
            fields.push('Importancia = ?')
            values.push(Importancia)
        }
        if(Ameacas){
            fields.push('Ameacas = ?')
            values.push(Ameacas)
        }
        if(imagem_Animal){
            fields.push('imagem_Animal = ?')
            values.push(imagem_Animal)
        }
        if(imagem_Habitat){
            fields.push('imagem_Habitat = ?')
            values.push(imagem_Habitat)
        }
        if(fields.length === 0){
            return res.status(400).send('Nenhum campo para atualizar')
        }
        values.push(id)
        const query = `UPDATE animais SET ${fields.join(', ')} WHERE id = ?`
        const [result] = await db.query(query, values)
        if(result.affectedRows > 0){
            res.status(200).send('Animal atualizada com sucesso')
        } else {
            res.status(404).send('Animal não encontradA')
        }
    } catch (err){
        console.error('Erro ao atualizar o Animal: ', err)
        res.status(500).send(err.message)
    }
}
exports.deleteAnimal = async(req, res) =>{
    const id = req.params.id    
    try{
        const [result] = await db.query('DELETE FROM animais WHERE id = ?', [id])
        if(result.affectedRows > 0){
            res.status(200).send('Animal deletado com sucesso')
        } else {
            res.status(404).send('Animal não encontrado')
        }
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}