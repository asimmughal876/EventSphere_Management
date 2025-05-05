const mongoose = require('mongoose');

const expoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  expo_image: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  theme: {
    type: String
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  exhibitors: [
    {
      exhibitor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exhibitor'
      },
    }
  ],
  booths: [
    {
      booth_number: {
        type: String,
        required: true
      },
      size: {
        type: String
      },
      floor: {
        type: String
      },
      coordinates: {
        x: { type: Number, required: true },
        y: { type: Number, required: true }
      },
      assigned_to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exhibitor',
        default: null
      },
      assignment_requests: [
        {
          exhibitor_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exhibitor',
            required: true
          },
          status: {
            type: String,
            enum: ['pending', 'accepted', 'rejected'],
            default: 'pending'
          },
          requested_at: {
            type: Date,
            default: Date.now
          },
          responded_at: {
            type: Date
          }
        }
      ],
      status: {
        type: String,
        enum: ['available', 'booked', 'unavailable'],
        default: 'available'
      },
      created_at: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = mongoose.model('Expo', expoSchema);
