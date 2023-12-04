const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('../views/home.ejs');
};

const getABC = (req, res) => {
    res.send('Check abc!');
};

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log('>> EMAIL = ', email, '>> NAME = ', name, '>> CITY = ', city);

    connection.query(
        `  INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?);`,
        [email, name, city],
        function (err, results) {
            res.send('CREATT USER SUCESSFUL');
        }
    );
};

const getXuanTruongHocNodeJS = (req, res) => {};

module.exports = {
    getHomePage,
    getABC,
    getXuanTruongHocNodeJS,
    postCreateUser,
};
