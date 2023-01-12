const express = require('express');

const { allProducts, getProductById } = require('../controllers/productsController');

const router = express.Router();

router.get('/',(req,res) => {
    res.send('<h1>Hola Mundo</h1>')
})

router.get('/products', allProducts);

router.get('/product/:id',getProductById);

router.get('/about', (req,res) => {
    res.send('<h1>Soy about.....</h1>')
})
module.exports = router;