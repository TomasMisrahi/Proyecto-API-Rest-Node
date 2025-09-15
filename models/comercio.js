const mongoose = require('mongoose');

const comercioSchema = new mongoose.Schema({
  nombre:     { type: String, required: true },
  direccion:  { type: String, required: true },
  telefono:   { type: String },
  rubro:      { type: String, enum: ['Panadería','Supermercado','Rotisería','Verdulería','Restaurante'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Comercio', comercioSchema);
