const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/:productId', (req, res, next) =>{
    res.status(200).json({
        message: 'Product details',
        ProductId: req.params.productId
    });
});

router.post('/add', (req, res, next) =>{
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        categoryId: req.body.categoryId,
        categoryName: req.body.categoryName,
        averageRating: req.body.averageRating,
        numberOfRaters: req.body.numberOfRaters
    });
    product.save().then(result =>{
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Product was created!',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) =>{
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an Id'
        });
    }
});


router.patch('/updateCategory/:productId',(req, res, next) =>{
    res.status(200).json({
        message: 'Updated product Category!'
    });
});

router.delete('/remove/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;