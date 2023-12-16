const Customer = require('../models/customer');
const createUserCustomerService = async (dataCustomer) => {
    try {
        let result = await Customer.create(dataCustomer)
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const createArrayCustomersService = async (arrayCustomer) => {
    try {
        let result = await Customer.insertMany(arrayCustomer)
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

module.exports = {
    createUserCustomerService,
    createArrayCustomersService
};
