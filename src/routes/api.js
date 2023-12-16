const express = require('express');

const routerAPI = express.Router();

const {
    getUsersAPI,
    postUsersAPI,
    putUsersAPI,
    deleteUsersAPI,
    postUploadFileSingleAPI
} = require('../controllers/apiController');

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postUsersAPI);

routerAPI.put('/users', putUsersAPI);

routerAPI.delete('/users', deleteUsersAPI);

routerAPI.post('/file', postUploadFileSingleAPI);

module.exports = routerAPI;
