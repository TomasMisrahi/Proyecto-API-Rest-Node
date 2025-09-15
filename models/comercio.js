const mongoose = require('mongoose');

const comercioSchema = new mongoose.Schema({
  nombre:     String,
  direccion:  String,
  tel:        String,
  rubro:      String
});

module.exports = mongoose.model('Comercio', comercioSchema);
