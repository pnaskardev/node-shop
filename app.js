const express=require('express');

const app=express();

const productRoutes=require('./routes/product-routes');


app.use('/products',productRoutes);

app.use('/',(req, res, next)=>{
    res.status(200).json({
        "message":"It Works!!"
    });
});




module.exports=app