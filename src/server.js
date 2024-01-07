require('dotenv').config();
const express = require('express'); // common js
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');
const mysql = require('mysql2');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');
const { MongoClient } = require('mongodb');


// import express from 'express'
const app = express();
const port = process.env.PORT || 8888;

// default options
app.use(fileUpload());

// Config reg in body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// Config view engine
configViewEngine(app);

app.use('/', webRouter);
app.use('/v1/api/', apiRouter);

// Test connection
(async () => {
    try {
        // Using mongoose
        await connection();

        // Using mongodb driver
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);
        const dbName = process.env.DB_NAME;

        // Use connect method to connect to the server
        // await client.connect();
        // console.log('Connected successfully to server');
        
        const db = client.db(dbName);
        const collection = db.collection('customers');

        collection.insertOne({
            "name": "Xuan Truong 1",
            "address": [
                {
                    provice: "HN",
                    country: {
                        name: 'vietnam',
                        code: "VN2024",
                    },
                },
                {
                    provice: "HCM",
                    country: {
                        name: 'vietnam',
                        code: "VN20241",
                    },
                },
            ]
        })
        let a = await collection.findOne({ address: "Ha noi" })

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (err) {
        console.log('Error to database: ', err);
    }
})();
