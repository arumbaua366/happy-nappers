const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  age: Number,
  signup: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
