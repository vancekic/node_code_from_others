var express = require("express");
var app = express();

// get home route
app.get('/', function(request, response) {
	response.send('Hello !');
	response.end();
});

// listen on port 3000
app.listen(3000, function() {
	console.log("Listening on port 3000");
});

// TODO : Nico, show me the express static magic!