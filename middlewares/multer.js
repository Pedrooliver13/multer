const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb)=>{//defini o destino para que será enviado as fotos
    cb(null, './public/images')//primeiro parâmetro de erro, segundo rota
  },
  filename: (req, file, cb) =>{
    cb(null, `${Date.now().toString()}-${file.originalname}` // colocando a data na frente do nome para nunca ter foto como o mesmo nome
  }
})

const fileFilter = (req, file, cb)=>{
  const isAccepted = ['image/png' , 'image/jpg', 'image/jpeg']
  .find(acceptedFormat => acceptedFormat == file.mimetype) 
  // rodo uma função de procurar(find) que precisa de true or false
  //mimetype mostra o tipo da imagem(jpg, png etc.)
  
  if(isAccepted){
    return true //se o find encontrou algum tipo escolhido ele passa nessa condição
  }
  
  return false
}

module.exports = multer({ // exportando o multer
  storage, 
  fileFilter
})
