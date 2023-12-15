const connection = require('../config/database');
const User = require('../models/user');

const getUsersAPI = async (req, res) => {
    let users = await User.find({});
    
    return res.status(200).json({
        errorCode: 0,
        data: users
    });
};

const postUsersAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let user = await User.create({ email, name, city });

    return res.status(200).json({
        errorCode: 0,
        data: user
    });
};

module.exports = {
    getUsersAPI,
    postUsersAPI
}