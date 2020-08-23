var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');

//Crear un usuario
router.post('/', function(req, res) {
    let u = new usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        fechaNacimiento: {
            dia: req.body.dia,
            mes: req.body.mes,
            anio: req.body.anio
        },

    });
    u.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

//Obtener todos los usuarios
router.get('/', function(req, res) {
    usuario.find({}, { _id: true, nombre: true })
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});

//obtener solo un usuario
router.get('/:id', function(req, res) {
    usuario.find({ _id: req.params.id }).then(result => {
        res.send(result[0]);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

module.exports = router;