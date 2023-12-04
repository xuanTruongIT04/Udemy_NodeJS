require('dotenv').config();
// create the connection to database
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, // default: 3306
    password: process.env.DB_PASSWORD, // default: empty
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = connection;
