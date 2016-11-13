var mysql = require('mysql');

var connection = mysql.createcConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: cogen_schedule
});

connection.connect();