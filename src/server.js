require('dotenv').config();
const express = require('express'); // common js
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const connection = require('./config/database');

// import express from 'express'
const app = express();
const port = process.env.PORT || 8888;

// Config view engine
configViewEngine(app);

app.use('/', webRouter);

// simple query
// connection.query('SELECT * FROM Users u', function (err, results, fields) {
//     console.log(results);
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
