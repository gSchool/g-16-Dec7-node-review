var express = require('express');
var app = express();

app.get('/form', function(req, res) {
	console.log(req.query);
	console.log(req.query.firstname);
	console.log(req.query.lastname);
	res.sendFile(__dirname + '/reviewForm.html');
})

app.listen(3000);