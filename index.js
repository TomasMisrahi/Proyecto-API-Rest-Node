<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const routerAPI = require('./routes');

dotenv.config();
const PORT = process.env.PORT || 3000;
const URI_DB = process.env.URI_DB;

// Conexión a MongoDB
mongoose.connect(URI_DB);
const db = mongoose.connection;
db.on('error', () => { console.error('Error de conexión'); });
db.once('open', () => { console.log('Conexión con la DB Correcta 👌'); });

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Servir HTML (portada del parcial) desde /public
app.use('/', express.static(path.join(__dirname, 'public')));

// Montar rutas de la API (comercios y ofertas)
routerAPI(app);

// Ready
app.listen(PORT, () => {
  console.log(`API SobraZero en el puerto ${PORT}`);
});
 
=======
const dotenv = require('dotenv');
dotenv.config();

const chalk = require('chalk');

const express = require('express');
const server = express();

const port = process.env.PORT;
console.log(chalk.green("API"));


server.listen(port, () => {
    console.log(chalk.blue(`Servidor web corriendo en el puerto ${port}`));
});
>>>>>>> 66a9a7babe888ca8593604e0947e36859e5b4234
