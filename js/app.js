'use strict';

var css = require(  './../css/style.scss' );

var Elm = require('./../src/Main.elm');

Elm.Main.embed(document.getElementById('main'));