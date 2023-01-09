const express = require('express');

const { allProducts, getProductById } = require('../controllers/productsController');

const router = express.Router();


router.get('/products', allProducts);

router.get('/product/:id',getProductById);


module.exports = router;