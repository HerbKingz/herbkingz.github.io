const mongoose = require('mongoose');
const Product = new mongoose.Schema({
  name: String,
  description: String,
  thc: Number,
  cbd: Number,
  price: Number,
  imageUrl: String
});
module.exports = mongoose.model('Product', Product);
