const mongoose = require('mongoose');

const expoScheduleSchema = new mongoose.Schema({
  expo_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Expo',
    required: true
  },
  speaker_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Speaker' 
  },
  topic: {
    type: String,
    required: true
},
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ExpoSchedule', expoScheduleSchema);
