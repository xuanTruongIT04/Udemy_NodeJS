const express = require('express');
const { getHomePage, getABC, postCreateUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);

router.post('/create-user', postCreateUser);

router.get('/abc', getABC);

router.get('/xuantruonghocnodejs', (req, res) => {
    res.render('sample.ejs');
}); 

module.exports = router;
