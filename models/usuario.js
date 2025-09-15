const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email:  { type: String, required: true },
  clave:  { type: String, required: true },
  tel:    { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Usuario', UsuarioSchema);
