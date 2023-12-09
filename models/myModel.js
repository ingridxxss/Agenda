const mongoose = require('../db');


const modelo= new mongoose.Schema({
    campo1: String,
    campo2: Number,
});


const myModel = mongoose.model('myModel', modelo);


module.exports = myModel;
