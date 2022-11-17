// the schema and model for mongodb database will go in here

// require mongoose
const mongoose = require('mongoose');

// create schema
const schema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  school: { type: String, required: true }
})

// declare the model
const User = mongoose.model('User', schema);

// export the model
module.exports = User;