const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

const productroutes = require('./src/routes/product.route')


// Product routes
app.use('/product/add', productroutes);
app.use('/product/remove/:id', productroutes)
app.use('/product/:id',productroutes)
app.use('/product/list', productroutes)
app.use('/product/updateCategory', productroutes)

// Routes from rating service
app.use('/product/sync', syncProduct)



// listen to the port
app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
});