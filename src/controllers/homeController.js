const connection = require('../config/database');
const {
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    postDeleteUser,
} = require('../services/CRUDService');
const User = require('../models/user');

const getHomePage = async (req, res) => {
    let allUsers = await User.find({});
    return res.render('../views/home.ejs', { listUsers: allUsers });
};

const getABC = (req, res) => {
    connection.query(`  SELECT * FROM Users`, function (err, results) {
        res.send(results);
    });
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    await User.create({ email, name, city });
    res.send('CREATT USER SUCCESSUL');
};

const getUpdatePage = async (req, res) => {
    let user = await User.findOne({ _id: req.params.id });
    console.log(user);

    res.render('update.ejs', { user: user });
};

const postUpdateUser = async(req, res) => {
    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // console.log('>>> CHECK REQUEST: ', req.body);

    let update = {
        name: name,
        email: email,
        city: city
    }

    await User.updateOne({ _id: userId}, update);
    res.redirect('/');
};

const deleteUser = async (req, res) => {
    let user = await getUserById(req.params.id);

    res.render('../views/delete.ejs', { user: user });
};

const handleDeleteUser = async (req, res) => {
    await postDeleteUser(req.body.userId);
    res.redirect('/');
};

module.exports = {
    getHomePage,
    getABC,
    getCreatePage,
    postCreateUser,
    getUpdatePage,
    postUpdateUser,
    deleteUser,
    handleDeleteUser,
};
