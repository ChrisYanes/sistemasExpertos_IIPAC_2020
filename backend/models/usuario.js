var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    fechaNacimiento: mongoose.SchemaTypes.Mixed,
    tarifa: String,
    proyectos: Array
});

module.exports = mongoose.model('usuarios', esquema);