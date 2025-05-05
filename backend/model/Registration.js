// models/Registration.js
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure users can't register multiple times with the same email
  },
  number: {
    type: String,
    required: true,
  },
  expo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Expo',
    required: true, // Ensure that each registration is linked to a specific expo
  },
}, { timestamps: true });

const Registration = mongoose.model('Registration', registrationSchema);
module.exports = Registration;
