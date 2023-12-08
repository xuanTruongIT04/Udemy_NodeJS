const express = require('express');
const {
    getHomePage,
    getABC,
    getCreatePage,
    postCreateUser,
    getUpdatePage,
    postUpdateUser,
    deleteUser,
    handleDeleteUser,
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);

router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);

router.get('/update/:id', getUpdatePage);
router.post('/update-user', postUpdateUser);

router.get('/abc', getABC);

router.post('/delete-user/:id', deleteUser);
router.post('/delete-user', handleDeleteUser);

router.get('/xuantruonghocnodejs', (req, res) => {
    res.render('sample.ejs');
});

module.exports = router;
