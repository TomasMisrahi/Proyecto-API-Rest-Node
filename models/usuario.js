const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  email:  String,
  clave:  String,
  tel:    String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
