const express=require('express');

const app=express();

const productRoutes=require('./routes/product-routes');
const orderRoutes=require('./routes/order-routes');
const userRoutes=require('./routes/user-routes');
const bodyParser = require('body-parser');

// Middlewares 
app.use(bodyParser.json())

// Routes
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
app.use('/users',userRoutes);

app.use('/',(req, res, next)=>{
    res.status(200).json({
        "message":"It Works!!"
    });
});




module.exports=app