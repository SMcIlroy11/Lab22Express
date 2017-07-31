var express=require('express');
var app=express();
var routes = require('./routes');

app.use('/deathcab', routes);
app.use(express.static(__dirname + '/public'));

var server= app.listen(3000, function () {
var port = server.address().port;
console.log('App is listening');

});
