const multer = require('multer');

// Configuração unificada de armazenamento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(`Processando o campo: ${file.fieldname}`);
        
        if (file.fieldname === 'Imagem') {
            console.log('Salvando em: ./uploads/ImagensNoticias');
            cb(null, './uploads/ImagensNoticias');
        } else if (file.fieldname === 'Texto') {
            console.log('Salvando em: ./uploads/TextosNoticias');
            cb(null, './uploads/TextosNoticias');
        } else {
            console.error(`Campo desconhecido: ${file.fieldname}`);
            cb(new Error(`Campo desconhecido: ${file.fieldname}`), null);
        }
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}_${file.originalname}`;
        console.log(`Gerando nome do arquivo para ${file.fieldname}: ${uniqueName}`);
        cb(null, uniqueName);
    }
});

// Middleware de upload para múltiplos campos
const upload = multer({ 
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limite opcional de 10 MB por arquivo
    fileFilter: (req, file, cb) => {
        // Filtro opcional para tipos de arquivo permitidos
        const allowedTypes = ['image/jpeg', 'image/png', 'text/plain'];
        if (!allowedTypes.includes(file.mimetype)) {
            console.error(`Tipo de arquivo não permitido: ${file.mimetype}`);
            return cb(new Error(`Tipo de arquivo não permitido: ${file.mimetype}`), false);
        }
        console.log(`Tipo de arquivo permitido: ${file.mimetype}`);
        cb(null, true);
    }
});

// Exporta o middleware configurado
module.exports = upload;
