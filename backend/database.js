const mongoose = require('mongoose');

const db_connection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/EventSphere_Management');
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = db_connection;