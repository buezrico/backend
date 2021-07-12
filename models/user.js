const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  sex: { type: String },
  state: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
