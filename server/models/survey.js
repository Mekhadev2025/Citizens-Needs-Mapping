const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  district: String,
  basicNeed: String,
  stdNeed: String,
  preNeed: String,
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;