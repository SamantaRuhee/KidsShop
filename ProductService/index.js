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
//app.delete('/product/remove/:productId', deleteProduct)
//app.get('/product/list', getAllProducts)
//app.post('/product/updateCategory', updateCategory)

// Routes from rating service
//app.post('/product/sync', syncProduct)

app.get('/',(req,res)=>{
    res.send('hello world');
});

// listen to the port
app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
});