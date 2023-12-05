const connection = require('../config/database');

const getAllUser = async () => {
    let [results, fields] = await connection.query(`SELECT * FROM Users u`);
    return results;
}

module.exports = {
    getAllUser
}