// routes/usuarios.js
const express = require('express');
const Usuario = require('../models/Usuario');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        // Obtener el último usuario registrado
        const lastUser = await Usuario.findOne().sort({ _id: -1 });  // Ordenamos por _id de forma descendente
        const nextId = lastUser ? lastUser._id + 1 : 1;  // Si no hay usuarios, comenzamos con el ID 1

        // Crear el nuevo usuario con el ID incrementado
        const usuario = new Usuario({
            _id: nextId,  // Asignamos el ID secuencial
            ...req.body
        });

        await usuario.save();
        res.status(201).send(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el usuario', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.send(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los usuarios', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al buscar el usuario', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el usuario', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.send({ mensaje: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el usuario', error });
    }
});

module.exports = router;
