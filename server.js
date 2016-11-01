'use strict';

var express      = require('express');
var bodyParser   = require('body-parser');
var http         = require('http');
var path         = require('path');
var cookieParser = require('cookie-parser');

var port = process.env.PORT || 3010;
var app = express();

app.use(express.static( process.cwd() ));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function(req, res) {
	res.render('index');
});

//console.log('process.env.PORT', process.env.PORT);
app.listen(port);
console.log('The magic hapens on port ' + port);