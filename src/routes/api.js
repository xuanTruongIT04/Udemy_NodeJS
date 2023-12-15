const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI } = require('../controllers/apiController');

routerAPI.get('/', (req, res) => {
    res.send('HELLO WORLD WITH APIS');
});

routerAPI.get('/abc', (req, res) => {
    res.status(200).json({
        data: 'HELLO WORLD WITH ABC',
    });
});

routerAPI.get('/users', getUsersAPI);

module.exports = routerAPI;
