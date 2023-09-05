const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  
  name:String,
  age:String,
  district: String,
  occupation:String,
  basicNeed: String,
  stdNeed: String,
  preNeed: String,
  issue:String,
  text:String
 
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;