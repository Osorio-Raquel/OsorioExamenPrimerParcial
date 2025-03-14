// routes/productos.js
const express = require('express');
const Producto = require('../models/Producto');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        // Obtener el último producto registrado
        const lastProducto = await Producto.findOne().sort({ _id: -1 });  // Ordenamos por _id de forma descendente
        const nextId = lastProducto ? lastProducto._id + 1 : 1;  // Si no hay productos, comenzamos con el ID 1

        // Crear el nuevo producto con el ID incrementado
        const producto = new Producto({
            _id: nextId,  // Asignamos el ID secuencial
            ...req.body
        });

        await producto.save();
        res.status(201).send(producto);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el producto', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.send(productos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los productos', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al buscar el producto', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(producto);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el producto', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.send({ mensaje: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el producto', error });
    }
});

module.exports = router;

