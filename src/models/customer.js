const mongoose = require('mongoose');

// Set up database
const customerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: String,
        city: String,
        address: String,
        phone: String,
        image: String,
        description: String,
    },
    { timestamps: true }
);

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
