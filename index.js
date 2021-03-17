// importando a biblioteca 'express'
const express = require('express');
// importando a biblioteca 'mongoose'
const mongoose = require('mongoose');
// criando um novo objeto
var app = express();

// estabelecendo a conexão com o MongoDB
mongoose.connect('mongodb+srv://thiago:root@nodeapi.yin34.mongodb.net/deliverydb');
mongoose.Promise = global.Promise;

// informando os 'middlewares' que serão utilizados pelo 'app'
app.use(express.static('public'));
app.use(express.json());
app.use('/api',require('./routes/api'));
app.use(function(err,req,res,next){
    // criando um 'middleware' para tratamento de erros
    res.status(422).send({ error: err.message })
});

// definindo a porta onde a 'api' irá escutar
app.listen(process.env.port || 4000, function(){
    console.log('API Iniciada! Aceitando requisições!');
});