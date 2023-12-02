const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render("../views/home.ejs")
};

const getABC = (req, res) => {
    res.send('Check abc!');
};

const postCreateUser = (req, res) => {
    console.log(">>> CHECK REQ: ", req.body);
}

const getXuanTruongHocNodeJS = (req, res) => {};

module.exports = {
    getHomePage,
    getABC,
    getXuanTruongHocNodeJS,
    postCreateUser
};
