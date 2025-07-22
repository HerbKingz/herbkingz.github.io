const mongoose = require('mongoose');
const Stat = new mongoose.Schema({
  date: Date,
  activePatients: Number,
  avgSpendPerYear: Number,
  prescribingClinics: Number,
  chartData: Object
});
module.exports = mongoose.model('Stat', Stat);
