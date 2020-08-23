var mongoose = require('mongoose');

var servidor = 'localhost:27017';
var db = 'deviaeditor';

class Database {
    constructor() {
        mongoose.connect(`mongodb://${servidor}/${db}`)
            .then(() => {
                console.log('Se conectó a Base de Datos Deviaeditor');
            }).catch((error) => {
                console.log(error);
            });
    }
}

module.exports = new Database();