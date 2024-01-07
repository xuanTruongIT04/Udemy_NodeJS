const express = require('express');

const routerAPI = express.Router();
const {
    getCustomersAPI,
    postCreateCustomerAPI,
    postCreateArrayCustomerAPI,
    putUpdateCustomerAPI,
    deleteACustomerAPI,
    deleteArrayCustomerAPI,
} = require('../controllers/customerController');

const {
    postUsersAPI,
    putUsersAPI,
    deleteUsersAPI,
    getUsersAPI,
    postUploadFileSingleAPI,
    postUploadFileMultipleAPI,
} = require('../controllers/apiController');

const {
    postCreateProjectAPI,
    getProjectsAPI,
    putUpdateProjectAPI,
    deleteAProjectAPI
} = require('../controllers/projectController');

const {
    postCreateTaskAPI,
    getTasksAPI,
    putUpdateTaskAPI,
    deleteATaskAPI
} = require('../controllers/taskController');

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

routerAPI.get('/projects', getProjectsAPI);
routerAPI.post('/projects', postCreateProjectAPI);
routerAPI.put('/projects', putUpdateProjectAPI);
routerAPI.delete('/projects', deleteAProjectAPI);

routerAPI.get('/tasks', getTasksAPI);
routerAPI.post('/tasks', postCreateTaskAPI);
routerAPI.put('/tasks', putUpdateTaskAPI);
routerAPI.delete('/tasks', deleteATaskAPI);

routerAPI.get('/info/:name/:city', (req, res) => {
    return res.status(200).json({
        data: req.params,
    });
});

module.exports = routerAPI;
