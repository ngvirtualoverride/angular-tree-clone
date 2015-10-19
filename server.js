var express = require("express");
var app = express();

var http = require('http').Server(app);

app.use("/", express.static(__dirname + '/app'));

var port   = process.env.PORT || 8083;

http.listen(port);
console.log('The magic happens on port ' + port);