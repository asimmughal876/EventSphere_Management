const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  _id: Number,
  role_name: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('role', roleSchema);
