const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const usuariosRoutes = require('./routes/usuarios');
const productosRoutes = require('./routes/productos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

let totalOperaciones = 0;
let historialOperaciones = [];

app.use((req, res, next) => {
    totalOperaciones++;
    const operacion = `${totalOperaciones}. ${req.method} ${req.originalUrl}`;
    historialOperaciones.push(operacion);
    console.log(operacion);
    next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar:', err));

// Rutas
app.use('/usuarios', usuariosRoutes);
app.use('/productos', productosRoutes);

app.get('/contadores', async (req, res) => {
    const totalUsuarios = await mongoose.model('Usuario').countDocuments();
    const totalProductos = await mongoose.model('Producto').countDocuments();
    res.send({ totalUsuarios, totalProductos });
});

// Ruta para obtener el total de operaciones
app.get('/operaciones', (req, res) => {
    res.send({ totalOperaciones });
});

// Ruta para obtener el historial de operaciones
app.get('/historial', (req, res) => {
    res.send({ historialOperaciones });
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
