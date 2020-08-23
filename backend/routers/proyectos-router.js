var express = require('express');
var router = express.Router();
var usuario = require('../models/proyecto');
var mongoose = require('mongoose');

//Obtener todos los proyectos
router.get('/', function(req, res) {
    usuario.find({}, { _id: true, titulo: true })
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});


module.exports = router;