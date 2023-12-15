const mongoose = require('mongoose');

// Set up database
const kittySchema = new mongoose.Schema({
    name: String,
});

const Kitten = mongoose.model('XuanTruong', kittySchema);

module.exports = Kitten;