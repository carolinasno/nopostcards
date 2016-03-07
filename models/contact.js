var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
  firstname: {type: String},
  lastname: {type: String},
  addressone: {type: String},
  addresstwo: {type: String},
  city: {type: String},
  state: {type: String},
  zipcode: {type: Number},
  countries: {type: Array},
}, {timestamps: true});

module.exports = mongoose.model('Contact', contactSchema);
