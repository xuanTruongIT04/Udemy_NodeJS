const connection = require('../config/database');
const {
    getAllUser,
    createUser,
    getUserById,
} = require('../services/CRUDService');

const getHomePage = async (req, res) => {
    // let [results, fields] = await connection.query(`SELECT * FROM Users u`);
    let allUsers = await getAllUser();
    // console.log('>>CHECK RES: ', results);
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

    let results = createUser(email, name, city);

    console.log('>>> CHECK RESULTS: ', results);
    res.send('CREATT USER SUCCESSUL');
};

const getUpdatePage = async (req, res) => {
    let user = await getUserById(req.params.id);

    console.log(user);

    res.render('update.ejs', { user: user });
};

const postUpdateUser = (req, res) => {};

module.exports = {
    getHomePage,
    getABC,
    getCreatePage,
    postCreateUser,
    getUpdatePage,
    postUpdateUser,
};
