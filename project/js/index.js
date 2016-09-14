var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

P.getPokemonByName('eevee') // with Promise
  .then(function(response) {
    console.log(response);
  })
