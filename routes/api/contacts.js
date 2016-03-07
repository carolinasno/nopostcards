var express = require('express');
var router = express.Router();
var Contact = require('../../models/contact');

router.get('/', function(req, res){
  Contact.find({}, function(err, dbContacts){
    res.json({contacts: dbContacts});
  });
});

router.post('/', function(req, res){
  console.log(req.body);
  Contact.create(req.body.contact, function(err, contact){
    res.json(contact);
  });
});

module.exports = router;
