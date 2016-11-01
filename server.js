var express      = require('express');
var bodyParser   = require('body-parser');
var http         = require('http');
var path         = require('path');
var cookieParser = require();

var app = express();

var port = process.env.PORT || 3010;

app.get('/', function() {
	app.render('./index.html');
});

//console.log('process.env.PORT', process.env.PORT);
app.listen(port);
console.log('The magic hapens on port ' + port);