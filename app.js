var express = require('express');
var app = express();
var mongoose = require('mongoose');


app.use(express.static('./public'));

app.set('view engine', 'jade');

mongoose.connect('mongodb://api/addresses');

app.get('/', function(req, res){
  res.render('index');
});

var port = 3000;
app.listen(port, function(){
  console.log('listening on ' + port);
})
