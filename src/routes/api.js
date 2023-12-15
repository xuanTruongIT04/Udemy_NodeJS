const express = require('express');

const routerAPI = express.Router();

const {
    getUsersAPI,
    postUsersAPI,
    putUsersAPI,
    deleteUsersAPI,
} = require('../controllers/apiController');

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postUsersAPI);

routerAPI.put('/users', putUsersAPI);

routerAPI.delete('/users', deleteUsersAPI);

module.exports = routerAPI;
