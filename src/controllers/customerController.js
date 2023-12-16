const { uploadSingleFile } = require('../services/fileServices');
const {
    showCustomerService,
    createCustomerService,
    createArrayCustomersService,
    putUpdateCustomerService
} = require('../services/customerService');

module.exports = {
    getCustomersAPI: async (req, res) => {
        let customers = await showCustomerService();
        return res.status(200).json({
            EC: 0,
            data: customers,
        });
    },

    postCreateCustomerAPI: async (req, res) => {
        let { name, email, city, address, phone, description } = req.body;
        let imageUrl = '';
        if (!req.files || Object.keys(req.files).length === 0) {
            // to do something
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }

        let dataCustomer = {
            name,
            email,
            city,
            address,
            phone,
            description,
            image: imageUrl,
        };

        let customer = await createCustomerService(dataCustomer);
        return res.status(200).json({
            EC: 0,
            data: customer,
        });
    },

    postCreateArrayCustomerAPI: async (req, res) => {
        try {
            let customers = await createArrayCustomersService(
                req.body.customers
            );

            if (customers) {
                return res.status(200).json({
                    EC: 0,
                    data: customers,
                });
            } else {
                return res.status(422).json({
                    EC: -1,
                    message: 'Failed',
                });
            }
        } catch (err) {
            return res.status(422).json({
                EC: -1,
                message: 'err: ' + JSON.stringify(err.message),
            });
        }
    },

    putUpdateCustomerAPI: async (req, res) => {
        let { id, name, email, city, address, phone, description } = req.body;
        let dataCustomer = {
            name,
            email,
            city,
            address,
            phone,
            description,
        };

        let customer = await putUpdateCustomerService(id, dataCustomer);
        return res.status(200).json({
            EC: 0,
            data: customer,
        });
    },
};
