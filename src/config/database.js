require('dotenv').config();
// create the connection to database
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME || 'root',
    database: process.env.DB_NAME || 'test',
    password: process.env.DB_PASSWORD || '', // default: empty
    port: process.env.PORT || 3306, // default: 3306
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = connection;
