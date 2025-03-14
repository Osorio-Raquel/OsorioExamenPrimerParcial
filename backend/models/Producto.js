// models/Producto.js
const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    _id: { type: Number, required: true },  // Usamos un número como ID
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true }
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
