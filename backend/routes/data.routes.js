const express = require('express');
const { getData, checkOut } = require('../controller/data.controller');

const router = express.Router();

router.get('/product' , getData);
router.post('/cart' , checkOut);

module.exports = router