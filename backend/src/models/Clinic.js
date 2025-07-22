const mongoose = require('mongoose');
const Clinic = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  website: String,
  lat: Number,
  lng: Number
});
module.exports = mongoose.model('Clinic', Clinic);
