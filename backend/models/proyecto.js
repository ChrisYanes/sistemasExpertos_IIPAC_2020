var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    fechaCreacion: mongoose.SchemaTypes.Mixed,
    archivos: Array
});

module.exports = mongoose.model('proyectos', esquema);