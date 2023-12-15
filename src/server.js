require('dotenv').config();
const express = require('express'); // common js
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const mysql = require('mysql2');
const connection = require('./config/database');
const mongoose = require('mongoose');

// import express from 'express'
const app = express();
const port = process.env.PORT || 8888;

// Config reg in body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// Config view engine
configViewEngine(app);

app.use('/', webRouter);

// Set up database
const kittySchema = new mongoose.Schema({
    name: String,
});

const Kitten = mongoose.model('Kitten', kittySchema);

const cat = new Kitten({ name: 'Xuan Truong cat' });
cat.save();


// Test connection
(async () => {
    try {
        await connection();
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (err) {
        console.log('Error to database: ', err);
    }
})();
