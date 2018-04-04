var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username : {type: String, required:true},
  mobile: {type: String, required:true},
  verifyCode: {type: String, required:true},
  email: {type: String, required:true},
  location: {type: String, required:true},
  bankId: {type: String, required:true},
  companyId: {type: String, required:true},
  roleId: {type: String, required:true},
  atmId: {type: String, required:true},
  assigned: {type: Boolean, required:true}
});

module.exports = mongoose.model("User", userSchema);
