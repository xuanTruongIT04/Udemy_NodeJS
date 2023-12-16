const Customer = require('../models/customer');

// const getAllUser = async () => {
//     let [results, fields] = await connection.query(`SELECT * FROM Users u`);
//     return results;
// };

const createUserCustomerService = async (dataCustomer) => {
    try {
        let result = await Customer.create(dataCustomer)
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

// const updateUser = async (id, email, name, city) => {
//     let [results, fields] = await connection.query(
//         `  UPDATE Users SET email = ?, name = ?, city = ?
//         WHERE id = ?`,
//         [email, name, city, id]
//     );
//     return results;
// };

// const getUserById = async (id) => {
//     let [results, fields] = await connection.query(
//         `SELECT * FROM Users WHERE id = ?`,
//         [id]
//     );
//     let user = results && results.length > 0 ? results[0] : {};
//     return user;
// };

// const postDeleteUser = async (id) => {
//     let [results, fields] = await connection.query(
//         `DELETE FROM Users WHERE id = ?`,
//         [id]
//     );
//     return results;
// };

module.exports = {
    createUserCustomerService,
    // getAllUser,
    // getUserById,
    // updateUser,
    // postDeleteUser
};
