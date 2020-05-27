const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  spotifyID: 
  { 
    type: String, 
    trim: true,
    required: true 
  },
  profilePic: 
  { 
    type: String, 
    required: true 
  },
  displayName:
  {
    type: String,
    trim: true,
    required: true
  },
  email: 
  {
    type: String,
    trim: true,
    lowercase: true,
    required: true
  },
  profileURL: 
  {
    type: String,
    required: true
  },
  accessToken: 
  {
    type: String,
    required: true
  },
  refreshToken: 
  {
    type: String,
    required: true
  },
  country: 
  {
    type: String,
    required: true
  },
  accountType: 
  {
    type: String,
    required: true
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
