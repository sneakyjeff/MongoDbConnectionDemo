/*
 * This is main file to run serverside code
 */

/* Routing/Express modules */
var express = require('express');
var app = express();
var path = require('path');

/* database connection */
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/db');

mongoose.connection.once('open', function(){
	console.log("connected to mongo");
}).on('error', function(error){
	console.log('connection error', error);
});


app.get('/', function(request, response){
	response.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
