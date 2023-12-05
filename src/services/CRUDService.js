const connection = require('../config/database');

const getAllUser = async () => {
    let [results, fields] = await connection.query(`SELECT * FROM Users u`);
    return results;
}

const createUser = async (email, name, city) => {
    let [results, fields] = await connection.query(
        `  INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`,
        [email, name, city]
    );
    return results;
}


const getUserById = async (id) => {
    let [results, fields] = await connection.query(`SELECT * FROM Users u WHERE u.id = ?`, [id]);
    let user = results && results.length > 0 ? results[0] : {}
    return user;
}

module.exports = {
    getAllUser,
    createUser,
    getUserById
}