const Product=require('../models/product');
const Order=require('../models/order');
const { default: mongoose } = require('mongoose');

function getOrdersListController (req,res,next){

    Order.find().select("product quantity _id").then((docs)=>{
        res.status(200).json({
            count:docs.length,
            orders:docs.map((doc)=>{
                return{
                    _id:doc._id,
                    product:doc.product,
                    quantity:doc.quantity,
                }
            })
        })
    }).catch((error)=>{
        console.log(error);
        res.status(500).json(error);
    });
}

function createOrderController(req,res,next){
    const id =req.body.productId;
    Product.findById(id).then((doc)=>{
        if(!doc)
        {
            return res.status(404).json({
                message:"Product Not Found!!"
            });
        }
        const order=new Order({
            _id:new mongoose.Types.ObjectId(),
            quantity:req.body.quantity,
            product:req.body.productId
        });
        order.save();
        return res.status(201).json({
            message:'Order was created',
            order:order
        });
    }).catch((error)=>{
        console.log(error);
        res.status(500).json(error);
    })
}

function retrieveOrderController(req,res,next){
    const id=req.params.orderId;

    Order.findById(id).then((order)=>{
        if(!order)
        {
            return res.status(404).json({
                message:"Order not found"
            })
        }
        return res.status(200).json({
            message:"Order Details",
            order:order
        });
    }).catch((err)=>{
        console.log(err);
        return res.status(500).json(err);
    })
}

function deleteOrderController(req,res,next){
    const id=req.params.orderId;
    Order.findByIdAndDelete({_id:id}).then((docs)=>{
        console.log(docs);
        return res.status(200).json({
            message:"Order Deleted",
            orderId:req.params.orderId
        });
    }).catch((err)=>{
        console.log(err);
        return res.status(500).json(err);
    })
}

module.exports = { 
    getOrdersListController,
    createOrderController,
    retrieveOrderController,
    deleteOrderController
}