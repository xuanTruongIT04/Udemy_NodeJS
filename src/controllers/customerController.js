const { uploadSingleFile } = require('../services/fileServices');
const { createUserCustomerService } = require('../services/customerService');

module.exports = {
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
        }

        let customer = await createUserCustomerService(dataCustomer);
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
};
