const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

 mongoose.connect(process.env.DB_CONNECTION)
 const connection = mongoose.connection;
 connection.once('open', ()=>{
     console.log('conexión a la BD exitosa')
 });
 connection.on('error',(err)=>{
     console.log('Error en la conexión: '+ err)
 })


const mobiliario = mongoose.model('mobiliario',{Nombre: String, Precio: Number, Descripcion: String})




app.get('/Mobiliario',(req,res)=>{

    try{
      mobiliario.find().then(doc=>{
        console.log(doc);
        res.json({producto:doc});
    })  
    } catch(error){
        console.log(error)
    }
    
    
})






app.listen(3000, ()=>{
    console.log('servidor encendido')
})