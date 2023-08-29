const mongoose= require('mongoose');

const productSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    name:String,
    price:Number
});

// Here Product means the Collection name in MongoDB 
productModel=mongoose.model('Product',productSchema);

module.exports=productModel;


