const data = require('../database/data');
const path = require('path');

const allProducts = (req,res) => {
    res.render(path.join(__dirname,'../views/products'),{'allProducts':data});
}

const getProductById = (req,res) => {
    const { id } = req.params;

    const product = data.filter((prod) => prod.id === parseInt(id));
    
    if(product.length) return res.render(path.join(__dirname,'../views/productdetail'),{'product': product}); //res.json(product);

    res.sendStatus(303);

}

module.exports = {
    allProducts,
    getProductById
}