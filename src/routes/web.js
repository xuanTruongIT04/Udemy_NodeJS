const express = require('express');
const { getHomePage, getABC } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/xuantruonghocnodejs', (req, res) => {
    res.render('sample.ejs');
}); 

module.exports = router;
