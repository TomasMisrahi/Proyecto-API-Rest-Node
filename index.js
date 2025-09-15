const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const routerAPI = require('./routes'); 

dotenv.config();
const PORT = process.env.PORT || 3000;
const URI_DB = process.env.URI_DB;

// Conexión a MongoDB
mongoose.connect(URI_DB);
const db = mongoose.connection;
db.on('error', () => { console.error('Error de conexión'); });
db.once('open', () => { console.log('Conexión con la DB correcta'); });

const app = express();
app.use(express.json());


// Servir HTML (portada del parcial) desde /public
app.use('/', express.static(path.join(__dirname, 'public')));

// Montar rutas de la API (comercios y ofertas)
routerAPI(app);

// Ready
app.listen(PORT, () => {
  console.log(`API SobraZero en el puerto ${PORT}`);
});