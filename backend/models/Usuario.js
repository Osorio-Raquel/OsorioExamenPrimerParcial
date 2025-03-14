// models/Usuario.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    _id: { type: Number, required: true },  // Usamos un número como ID
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    ocupacion: { type: String, required: true }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
