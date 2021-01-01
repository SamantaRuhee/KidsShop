var dbConn  = require('../../config/db.config');

var Product = function(Product){
    this.name     =   Product.name;
    this.categoryId          =   Product.categoryId;
    this.categoryName          =   Product.categoryName;
    this.averageRating   =   Product.averageRating;
    this.numberOfRaters    =   Product.numberOfRaters;
}

// get all Product
Product.getAllProduct = (result) =>{
    dbConn.query('SELECT * FROM Product WHERE is_deleted=0', (err, res)=>{
        if(err){
            console.log('Error while fetching Product', err);
            result(null,err);
        }else{
            console.log('Product fetched successfully');
            result(null,res);
        }
    })
}

// get Product by ID from DB
Product.getProductByID = (id, result)=>{
    dbConn.query('SELECT * FROM Product WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching Product by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new Product
Product.createProduct = (ProductReqData, result) =>{
    dbConn.query('INSERT INTO Product SET ? ', ProductReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Product created successfully');
            result(null, res)
        }
    })
}

// update Product
Product.updateProduct = (id, ProductReqData, result)=>{
    dbConn.query("UPDATE Product SET name=?,categoryId=?,categoryName=?,averageRating=?,numberOfRaters=? WHERE id = ?", [ProductReqData.name,ProductReqData.categoryId,ProductReqData.categoryName,ProductReqData.averageRating,ProductReqData.numberOfRaters, id], (err, res)=>{
        if(err){
            console.log('Error while updating the Product');
            result(null, err);
        }else{
            console.log("Product updated successfully");
            result(null, res);
        }
    });
}

// delete Product
Product.deleteProduct = (id, result)=>{
    // dbConn.query('DELETE FROM Product WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the Product');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE Product SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the Product');
            result(null, err);
        }else{
            console.log("Product deleted successfully");
            result(null, res);
        }
    });
}

module.exports = Product;