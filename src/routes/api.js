const express = require('express');

const routerAPI = express.Router();
const {
    getCustomersAPI,
    postCreateCustomerAPI,
    postCreateArrayCustomerAPI,
    putUpdateCustomerAPI,
    deleteACustomerAPI,
    deleteArrayCustomerAPI
} = require('../controllers/customerController');

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

routerAPI.get('/customers', getCustomersAPI);
routerAPI.post('/customers', postCreateCustomerAPI);
routerAPI.put('/customers', putUpdateCustomerAPI);
routerAPI.delete('/customers', deleteACustomerAPI);

routerAPI.post('/customers-many', postCreateArrayCustomerAPI);
routerAPI.delete('/customers-many', deleteArrayCustomerAPI);

module.exports = routerAPI;
