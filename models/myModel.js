const mongoose = require('mongoose');  // Usa '../../db' para retroceder dos niveles en la estructura de carpetas


const modelo = new mongoose.Schema({
  Titulo: {
    type: String,
    require: true
  },
  Fecha: {
    type: Number,
    require: true
  },
  Descripcion: {
    type: String,
    require: true
  },
});


const notas = mongoose.model('myModel', modelo);


module.exports = notas;
