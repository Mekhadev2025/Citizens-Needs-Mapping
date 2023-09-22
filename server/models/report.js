const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  district:String,
  basicNeeds: Number,
  stdNeeds: Number,
  preNeeds: Number,
  data:[{
    district:String,
    totalUnmetNeed:String,
  }]
 
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;