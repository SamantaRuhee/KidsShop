const Product = require('../models/Product.model');

// get all Product list
exports.getProductList = (req, res)=> {
    //console.log('here all Product list');
    Product.getAllProduct((err, Product) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Product', Product);
        res.send(Product)
    })
}

// get Product by ID
exports.getProductByID = (req, res)=>{
    //console.log('get Product by id');
    Product.getProductByID(req.params.id, (err, Product)=>{
        if(err)
        res.send(err);
        console.log('single Product data',Product);
        res.send(Product);
    })
}

// create new Product
exports.createNewProduct = (req, res) =>{
    const ProductReqData = new Product(req.body);
    console.log('ProductReqData', ProductReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        Product.createProduct(ProductReqData, (err, Product)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Product Created Successfully', data: Product.insertId})
        })
    }
}

// update Product
exports.updateProduct = (req, res)=>{
    const ProductReqData = new Product(req.body);
    console.log('ProductReqData update', ProductReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        Product.updateProduct(req.params.id, ProductReqData, (err, Product)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Product updated Successfully'})
        })
    }
}

// delete Product
exports.deleteProduct = (req, res)=>{
    Product.deleteProduct(req.params.id, (err, Product)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Product deleted successully!'});
    })
}