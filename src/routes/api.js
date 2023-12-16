const express = require('express');

const routerAPI = express.Router();
const { postCreateCustomerAPI } = require('../controllers/customerController');

const {
    postUsersAPI,
    putUsersAPI,
    deleteUsersAPI,
    getUsersAPI,
    postUploadFileSingleAPI,
    postUploadFileMultipleAPI,
} = require('../controllers/apiController');

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postUsersAPI);
routerAPI.put('/users', putUsersAPI);
routerAPI.delete('/users', deleteUsersAPI);

routerAPI.post('/file', postUploadFileSingleAPI);
routerAPI.post('/files', postUploadFileMultipleAPI);

routerAPI.post('/customers', postCreateCustomerAPI);

module.exports = routerAPI;
