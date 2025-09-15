const mongoose = require('mongoose');

const ofertaSchema = new mongoose.Schema({
  titulo:         String,
  descripcion:    String,
  precioOriginal: Number,
  descuento:      Number,
  comercio:       String
});

module.exports = mongoose.model('Oferta', ofertaSchema);
