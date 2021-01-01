const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/Product.controller');

// get all Product
router.get('/product/list', ProductController.getProductList);

// get Product by ID
router.get('/:id',ProductController.getProductByID);

// create new Product
router.post('/product/add', ProductController.createNewProduct);

// update Product
router.put('/product/updateCategory/:id', ProductController.updateProduct);

// delete Product
router.delete('/product/remove/:id',ProductController.deleteProduct);

module.exports = router;