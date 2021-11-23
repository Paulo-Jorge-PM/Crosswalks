var express = require('express');
var router = express.Router();
const axios = require('axios');
const localhost = require('../config/env').passadeiras


// ==CRUD==

//GET ALL OR BY ID
router.get('/', function(req, res) {
    //View One by Id
    if(req.query.id) {
        id = req.query.id;
        axios.get(localhost+'/api/passadeiras/' + id)
            .then(dados => {
              res.render('index', {ficha: dados.data});
            })
            .catch(erro => {
              res.render('error', {error: erro})
            })
    }
    //View All
    else {
        axios.get(localhost+'/api/passadeiras')
            .then(dados => {
              res.render('index', {lista: dados.data});
            })
            .catch(erro => {
              res.render('error', {error: erro})
            })
    }
})


router.get('/test', function(req, res) {
axios.get("http://localhost:8080/api/passadeira/7")
   .then(response => {
    res.render('test', {ficha: JSON.stringify(response.data)});
    //$('#pedestres').text(response.data);
  })
.catch(erro => {
  console.log(erro)
})
})

//FORM FOR UPDATE
router.get('/form/:idPassadeira', function(req, res) {
    var id = req.params.idPassadeira;
    axios.get(localhost+'/api/passadeiras/' + id)
            .then(dados => {
              res.render('form', {ficha: dados.data});
            })
            .catch(erro => {
              res.render('error', {error: erro})
            })
})

//UPDATE
router.post('/form/:idPassadeira', function(req, res) {
    var id = req.params.idPassadeira;
    axios.put(localhost+'/api/passadeiras/' + id, req.body)
            .then(dados => {
              res.redirect('/');
            })
            .catch(erro => {
              res.render('error', {error: erro})
            })
})


//FORM FOR POST
router.get('/form', function(req, res) {
    res.render('form');
})

//POST INSERT
router.post('/form', function(req, res) {
        axios.post(localhost+'/api/passadeiras', req.body)
            .then(dados => {
              res.redirect(303, '/')
            })
            .catch(erro => {
              res.render('error', {error: erro})
            })
})


//DELETE
router.delete('/:idPassadeira', function(req,res){
    var id = req.params.idPassadeira;
    axios.delete(localhost+'/api/passadeiras/' + id)
        .then(dados => {
            res.redirect(303, '/');
        })
        .catch(erro => {
            res.render('error', {error: erro});
        })
})


module.exports = router;
