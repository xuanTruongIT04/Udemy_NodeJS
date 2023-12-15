const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postUsersAPI } = require('../controllers/apiController');

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postUsersAPI);

module.exports = routerAPI;
