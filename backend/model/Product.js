const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prod_name: {
        type: String,
        required: true
    },
    prod_details: {
        type: String,
        required: true
    },
    prod_image: {
        type: String,
        required: true
    },
    compony_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Compony',
        required: true
    },
});

module.exports = mongoose.model('Product', ProductSchema);
