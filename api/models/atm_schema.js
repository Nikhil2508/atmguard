var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var atmSchema = new Schema({
  atmName : {type: String, required:true},
  location : {type: String, required:true},
  address : {type: String, required:true},
  companyId : {type: String, required:true},
  bankId : {type: String, required:true},
  lat : {type: String, required:true},
  lng : {type: String, required:true},
  startShiftTime : {type: String, required:true},
  endShiftTime : {type: String, required:true}
});

module.exports = mongoose.model("Roles", roleSchema);
