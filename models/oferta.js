const mongoose = require('mongoose');

const ofertaSchema = new mongoose.Schema({
  titulo:         { type: String, required: true },
  descripcion:    { type: String },
  precioOriginal: { type: Number, required: true },
  descuento:      { type: Number, required: true }, // %
  comercio:       { type: mongoose.Schema.Types.ObjectId, ref: 'Comercio', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Oferta', ofertaSchema);
