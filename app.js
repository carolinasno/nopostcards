var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static('./public'));

app.set('views', __dirname + '/public/views')
app.set('view engine', 'jade');

var mongoPath = process.env.MONGOLAB_URI || 'mongodb://localhost/contacts_api';
mongoose.connect(mongoPath);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var index = require('./routes/index');
app.use('/', index);

var contacts = require('./routes/api/contacts');
app.use('/api/contacts', contacts);

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('listening on ' + port);
});
