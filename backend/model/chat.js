const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reciever: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Chat', ChatSchema);
