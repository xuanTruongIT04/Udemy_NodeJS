require('dotenv').config()
const express = require('express') // common js
const configViewEngine = require("./config/viewEngine")
const webRouter = require("./routes/web")

// import express from 'express' 
const app = express()
const port = process.env.PORT || 8888;


// Config view engine
configViewEngine(app);

app.use('/', webRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
