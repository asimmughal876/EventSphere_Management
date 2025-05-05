const mongoose = require('mongoose');

const ComponySchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true
    },
    company_details: {
        type: String,
        required: true
    },
    company_image: {
        type: String,
        required: true
    },
    exhibitor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exhibitor',
        required: true
    },
});

module.exports = mongoose.model('Compony', ComponySchema);
