const mongoose = require('mongoose');
const attendexpoSchema = new mongoose.Schema({
    session_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ExpoSchedule',
        default: null
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: null
    },
    expo_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expo',
    }
});

module.exports = mongoose.model('attend', attendexpoSchema);
