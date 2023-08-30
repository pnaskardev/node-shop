// Here Product and User are Redundant Data cause
// We already have those information in other tables or other databases 
// {
//     _id is uniquye identifier for on Order 
//     productId:ObjectId
//     userId:ObjectId
//     price:
//     address
//     payement method:
// }

const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    product:{
        type:mongoose.Types.ObjectId,
        ref:'Product',
        required:true,
        quantity:{
            type:Number,
            default:1
        }
    }
});
const orderModel=mongoose.model('Order',orderSchema);

module.exports=orderModel;
