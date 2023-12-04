const express = require('express');
const { getHomePage, getABC, getCreatePage, postCreateUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);

router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);

router.get('/abc', getABC);

router.get('/xuantruonghocnodejs', (req, res) => {
    res.render('sample.ejs');
}); 

module.exports = router;
