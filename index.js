const express= require('express')
const app = express(); 

app.get('/',(req,res)=>{
    res.send('hola mundo') //cuando alla una peticion responda y envie "hola mundo"//
})

app.listen(3000,()=>{
    console.log("estoy en el puerto 3000")
})