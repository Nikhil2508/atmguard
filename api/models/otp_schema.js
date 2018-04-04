var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var otpSchema = new Schema({
  roleName : {type: String, required:true}
});

module.exports = mongoose.model("Roles", roleSchema);
