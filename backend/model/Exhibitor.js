const mongoose = require('mongoose');

const ExhibitorSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
      },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Exhibitor', ExhibitorSchema);
