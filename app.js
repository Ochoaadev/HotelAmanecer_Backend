var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var connection = require('./src/config/conexion')
const { swaggerDocs } = require("./Swagger");
const fs = require('fs')
const multer = require("multer");

var indexRouter = require('./src/routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//

const storage = multer.diskStorage({
    destination: path.join(__dirname, "src/public"),
    filename: (req, file, cb) => {
      cb(null, new Date().getTime() + path.extname(file.originalname));
    },
  });

app.use(multer({ storage: storage }).single("image"));


//                      -------------------

app.use('/', indexRouter);

// Se verifica la existencia del archivo .ENV, en caso que no exista, se detiene el servidor
const CheckEnv = () => {
    try {
       fs.accessSync('.env', fs.constants.F_OK);
       //Si lo encuentra devuelve el console.log
       console.log('Archivo .env encontrado');
    } catch (err) {
       //Caso contrario, devuelve el error(Dicho error se visualiza en la consola, antes del [Running]-PORT)
       console.error('Error: Archivo .env no encontrado');
       process.exit(1)
    }
   };

   //Establece el puerto con el que se estará trabajando, así como también se establece el archivo Swagger.
   app.listen(4000, () => {
    console.log(`[Running] - PORT: 4000`);
    console.log("[Link]    " + "http://localhost:4000");
    swaggerDocs(app, 4000);
  });

    //Se establece conexión con la base de datos
    connection()
    .then(() => console.log('Conectado a la base de datos correctamente'))
    .catch((e) => console.error(`Ocurrió un error al conectar con la base de datos: ${e.message}`));
    CheckEnv();
   
module.exports = app;
