const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true
  },
  user_email: {
    type: String,
    required: true
  },
  user_pass: {
    type: String,
    required: true
  },
  user_image: {
    type: String,
    default: null
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  role_id: {
    type: Number,
    ref: 'role',
    default: null
  },
  resetToken: {
    type: String,
    default: null
  },
  resetTokenExpiry: {
    type: Date,
    default: null
  }
});

userSchema.pre('save', async function (next) {
  if (this.isModified('user_pass')) {
    this.user_pass = await bcrypt.hash(this.user_pass, 10);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
