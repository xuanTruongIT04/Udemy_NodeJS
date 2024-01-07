const mongoose = require('mongoose');

const mongooseDelete = require('mongoose-delete');
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
    {
        timestamps: true,
        // statics: {
        //     findByNameXT(name) {
        //         return this.find({ name: new RegExp(name, 'i') });
        //     },
        // },
    }
);

customerSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
