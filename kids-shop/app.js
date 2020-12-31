const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes which handles requests
const productsRoutes = require('./api/routes/products');

mongoose.connect(
    'mongodb+srv://mongoDB:'+ 
    process.env.mongoDB +
    '@kids-shop.avcwh.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    }
)


//MiddleWares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    next();
});

app.use('/product', productsRoutes);

app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status = 500;
    next(error);
});


app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    });
})

module.exports = app;