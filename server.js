const express = require ('express');
const app = express();
const port = 5500 ;
const morgan = require('morgan');
const path = require('path');
const bodyParser = require ('body-parser') ;
const mongoose = require ('mongoose') ;


app.set('view engine' , 'ejs' )
app.set('views', __dirname + '/views' )


app.use(express.static(__dirname + "/public"));


mongoose.connect('mongodb+srv://usuariofit:LLCJCfdA50aSwKAm@cluster0.5umcvjx.mongodb.net/?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(()=>console.log('Base de datos conectada'))
    .catch(err =>console.log('Base de datos no conectada', err))

app.listen(port, ()=>{
    console.log('servidor escuchando en http://localhost:')
})


//listo: conectar base de datos, crear consultas crud (crear,editar,eliminar)(martes y miercoles),front de la pagina(sabado y domingo),back de la pagina(jueves y viernes)
// (fechas limites)
// 30de marzo
