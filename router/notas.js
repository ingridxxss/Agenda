const express = require ('express');
const router = express.Router();
const notasSchema = require ("../models/myModel");
const notas = require('../models/myModel');




//crear nota
function guardar(){
router.post('/crear', async  (req,res) =>{
   const notas = notasSchema(req.body);
   notas.save()
   .then((data)=> res.json(data))
   .catch((error)=> res.json({message : error}))
})
}



//editar nota
function editar(){
    router.get('/editar/:id',async (req, res) => {
        const dato = await myModel.findById(req.params.id);
        res.render('editar', { dato });

        Router.post('/editar/:id', async (req, res) => {
            await myModel.findByIdAndUpdate(req.params.id, req.body);
            res.redirect('/');
            });
        })
}

// eliminar nota
function eliminar(){
    router.get('/eliminar',async  (req,res) =>{
        await myModel.findByIdAndRemove(req.params.id);
        res.redirect('/')
    })

module.exports = router;
