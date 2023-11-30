require('dotenv').config()
const express = require('express') // common js
const configViewEngine = require("./config/viewEngine")
const webRouter = require("./routes/web")
const mysql = require('mysql2');

// import express from 'express' 
const app = express()
const port = process.env.PORT || 8888;


// Config view engine
configViewEngine(app);

app.use('/', webRouter);

// Test connection
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'hoidanit',
  password: "123456", // default: empty
  port: 3307 // default: 3306
});

// simple query
connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
