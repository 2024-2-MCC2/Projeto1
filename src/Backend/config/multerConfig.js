const multer = require('multer')
const path = require('path')

// Configuração de upload para imagens
const imageStorage = multer.diskStorage({
    destination: './uploads/ImagensNoticias',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

// Configuração de upload para textos
const textStorage = multer.diskStorage({
    destination: './uploads/TextosNoticias',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const uploadImage = multer({ storage: imageStorage });
const uploadText = multer({ storage: textStorage });
module.exports = uploadImage
module.exports = uploadText