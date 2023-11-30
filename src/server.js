const express = require('express') // common js
const path = require('path') // common js

require('dotenv').config()

// import express from 'express' 
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || "localhost";


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Config static files 
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello World with Xuan Truong hoc NodeJS!')
})

app.get('/abc', (req, res) => {
  res.send('Check abc!')
})

app.get('/xuantruonghocnodejs', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
