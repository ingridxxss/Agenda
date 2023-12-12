const express = require ('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require ('body-parser') ;
const mongoose = require ('mongoose') ;
const notasRouter = require('./router/notas');
const notas = require ('./models/myModel')

const app = express();
const port = 5500 ;

app.use('/app', notasRouter);

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine' , 'ejs' );
app.set('views', __dirname + '/views' );


app.get('/', (req, res) => {
    res.render('index.ejs');
  });

app.use(express.static(__dirname + "/public"));

mongoose
    .connect('mongodb+srv://usuariofit:LLCJCfdA50aSwKAm@cluster0.5umcvjx.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>
        console.log('Base de datos conectada'))
    .catch(err => console.log('Base de datos no conectada', err))

app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
