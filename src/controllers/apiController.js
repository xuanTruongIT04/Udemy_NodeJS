const connection = require('../config/database');
const User = require('../models/user');

const getUsersAPI = async (req, res) => {
    let users = await User.find({});
    
    return res.status(200).json({
        errorCode: 0,
        data: users
    });
};

module.exports = {
    getUsersAPI
}