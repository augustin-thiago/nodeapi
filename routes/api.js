// importando a biblioteca 'express'
const express = require('express');
// criando um 'rounter'
const router = express.Router();

// criando o operador GET
router.get('/products', function(req,res){
    resizeBy.sendo({ type: 'GET'});
});

// criando o operador POST
router.post('/products', function(req,res){
    res.send({
        type: 'POST',
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price
    });
});

// criando o operador PUT
router.put('/products/:id', function(req,res){
    res.send({ type: 'PUT' });
});

// criando o operador DELETE
router.delete('/products/:id', function(req,res){
    res.send({ type: 'DELETE'});
});

module.exports = router;