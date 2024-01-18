const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name_user: {
    type: String,
    trim: true,
    required: true,
  },
  email_user: {
    type: String,
    trim: true,
    required: true,
  },
  password_user: {
    type: String,
    trim: true,
    required: true,
  },
  age_user: {
    type: Number,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("User", userSchema);
