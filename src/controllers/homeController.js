const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('../views/home.ejs');
};

const getABC = (req, res) => {
    connection.query(
        `  SELECT * FROM Users`,
        function (err, results) {
            res.send(results);
        }
    );
    
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    
    console.log('>> EMAIL = ', email, '>> NAME = ', name, '>> CITY = ', city);

    let [results, fields] = await connection.query(
        `  INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`, [email, name, city]);

    console.log(">>> CHECK RESULTS: ", results);
    res.send("CREATT USER SUCCESSUL");
};

const getCreatePage = (req, res) => {
    res.render("create.ejs")
};

module.exports = {
    getHomePage,
    getABC,
    getCreatePage,
    postCreateUser,
};
