const connection = require('../config/database');
const User = require('../models/user');

const getUsersAPI = async (req, res) => {
    let users = await User.find({});
    
    return res.status(200).json({
        EC: 0,
        data: users
    });
};

const postUsersAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let user = await User.create({ email, name, city });

    return res.status(200).json({
        EC: 0,
        data: user
    });
};

const putUsersAPI = async (req, res) => {
    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // console.log('>>> CHECK REQUEST: ', req.body);

    let update = {
        name: name,
        email: email,
        city: city,
    };

    let user = await User.updateOne({ _id: userId }, update);

    return res.status(200).json({
        EC: 0,
        data: user
    });
};

const deleteUsersAPI = async (req, res) => {
    let user = await User.deleteOne({ _id: req.body.userId });
    
    return res.status(200).json({
        EC: 0,
        data: user
    });
};

module.exports = {
    getUsersAPI,
    postUsersAPI,
    putUsersAPI,
    deleteUsersAPI
}