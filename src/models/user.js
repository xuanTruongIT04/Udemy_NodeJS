const mongoose = require('mongoose');

// Set up database
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;