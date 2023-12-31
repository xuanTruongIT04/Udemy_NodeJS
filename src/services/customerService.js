const Customer = require('../models/customer');
const aqp = require('api-query-params');

const showCustomerService = async (limit, page, queryString) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;

            const { filter } = aqp(queryString);
            delete filter.page;

            result = await Customer.find(filter)
                .skip(offset)
                .limit(limit)
                .exec();
        } else result = await Customer.find({});
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
