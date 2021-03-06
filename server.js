'use strict';

var express        = require('express');
var bodyParser     = require('body-parser');
var http           = require('http');
var path           = require('path');
var cookieParser   = require('cookie-parser');
var momentTimezone = require('moment-timezone');


var port = process.env.PORT || 3010;
var app = express();


//global.db = require("./models");
//var models = require("./models");

app.use(express.static( process.cwd() ));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function(req, res) {
	res.render('index');
});

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'cogen_schedule'
});

connection.connect();

//console.log('process.env.PORT', process.env.PORT);
app.listen(port);
console.log('The magic hapens on port ' + port);
