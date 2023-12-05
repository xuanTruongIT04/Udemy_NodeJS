const express = require('express');
const { getHomePage, getABC, getCreatePage, postCreateUser, getUpdatePage, postUpdateUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);

router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);

router.get('/update/:id', getUpdatePage);
router.get('/update-user', postUpdateUser);

router.get('/abc', getABC);

router.get('/xuantruonghocnodejs', (req, res) => {
    res.render('sample.ejs');
}); 

module.exports = router;
