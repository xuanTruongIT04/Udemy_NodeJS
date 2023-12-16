const express = require('express');

const routerAPI = express.Router();

const {
    getUsersAPI,
    postUsersAPI,
    putUsersAPI,
    deleteUsersAPI,
    postUploadFileSingleAPI,
    postUploadFileMultipleAPI
} = require('../controllers/apiController');

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postUsersAPI);

routerAPI.put('/users', putUsersAPI);

routerAPI.delete('/users', deleteUsersAPI);

routerAPI.post('/file', postUploadFileSingleAPI);

routerAPI.post('/files', postUploadFileMultipleAPI);

module.exports = routerAPI;
