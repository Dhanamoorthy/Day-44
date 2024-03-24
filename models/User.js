const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  activationToken: String,
  isActivated: { type: Boolean, default: false },
  resetPasswordToken: String,
});

module.exports = mongoose.model('User', userSchema);
