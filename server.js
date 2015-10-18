var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app).listen(8080);

app.use(express.static(__dirname));

app.get('/', function(req, res){
	var options = {
		root: __dirname
	}
	res.sendFile('default.htm', options);
});