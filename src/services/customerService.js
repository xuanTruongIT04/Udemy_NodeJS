const Customer = require('../models/customer');
const showCustomerService = async () => {
    try {
        let result = await Customer.find({});
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const createCustomerService = async (dataCustomer) => {
    try {
        let result = await Customer.create(dataCustomer);
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const createArrayCustomersService = async (arrayCustomer) => {
    try {
        let result = await Customer.insertMany(arrayCustomer);
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const putUpdateCustomerService = async (id, dataCustomer) => {
    try {
        let result = await Customer.updateOne({ _id: id }, dataCustomer);
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const deleteACustomerService = async (id) => {
    try {
        let result = await Customer.deleteById(id);
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const deleteArrayCustomerService = async (arrayId) => {
    try {
        let result = await Customer.delete({ _id: { $in: arrayId } });
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

module.exports = {
    showCustomerService,
    createCustomerService,
    createArrayCustomersService,
    putUpdateCustomerService,
    deleteACustomerService,
    deleteArrayCustomerService,
};
