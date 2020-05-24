const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first: 
  { 
    type: String, 
    required: true 
  },
  last: 
  { 
    type: String, 
    required: true 
  },
  children: 
  {
    type: Number,
    required: true
  },
  awake: Number,
  asleep: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;
