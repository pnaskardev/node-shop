const mongoose=require('mongoose');

const Product=require('../models/product');


async function getProductListController(req,res,next){

    // await Product.find().then((docs)=>{
    //     console.log(docs);
    //     res.status(200).json({
    //         message:"Got all the products in the database",
    //         products:docs
    //     });
    // }).catch((err)=>{
    //     console.log(err);
    //     res.status(500).json({
    //         message:"Failure",
    //         error:err
    //     })
    // })

    try {
        const product_list=await Product.find();
        console.log(product_list)
        res.status(200).json({
            message:"Get Products Request",
            products:product_list
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Failure",
            error:err
        })
    }
}

async function createProductController(req,res,next){  
    const product_instance=new Product({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price
    });

    // product_instance.save().then((result)=>{
    //     console.log(result);
    //     res.status(201).json({
    //         message:"Success",
    //         product:result
    //     })
    // }).catch((error)=>{
    //     console.log(error);
    //     res.status(500).json({
    //         message:"Failure",
    //         error:error
    //     })
    // });

    try {
        const result=await product_instance.save();
        console.log(result);
        res.status(201).json({
            message:"Success",
            product:result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Failure",
            error:error
        })
    }

}


async function retrieveProductController(req,res,next){
    const id=req.params.productId;
    
    Product.findById(id).then((result)=>{
        console.log(result);
        if(!result)
        {
            return res.status(404).json({
                message:"Product Not Found"
            })
        }
        res.status(200).json({
            message:"Success",
            product:result
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            message:"Failure",
            error:err
        })
    });

    // try {
    //     await const product_instance=Product.findById(id);
    //     res.status(200).json({
    //         message:"Success",
    //         product:result
    //     })
    // } catch (error) {
    //     console.log(err);
    //     res.status(500).json({
    //         message:"Failure",
    //         error:err
    //     })
    // }

}

async function updateProductController(req,res,next){

    // {
    //     "name":"Samsung",<---------------------- propsName=name, value=Samsung
    //     "price":"200"<------------------ propsname=price, value=200
    // }
    // propsName is name and value is samsung
    const id =req.params.productId;
    // update Operation
    const updateOps={};

    // req.body will contain only those fields which are needed to be updated
    for (let [key,value] of Object.entries(req.body))
    {
        updateOps[key]=value;
        // console.log(`key->${key}, value->${value}`);
    }
    console.log(updateOps);
    Product.findByIdAndUpdate(id,{$set:updateOps}).then((result)=>{
        console.log(result);
        res.status(200).json({
            message:"Product Updated",
            product:result
        })
    }).catch((error)=>{
        console.log(error);
        res.status(500).json({
            error:error
        })
    });

    
}

async function deleteProductController(req,res,next){
    const id=req.params.productId;
    Product.findByIdAndDelete(id).then((result)=>{
        console.log(result);
        if(result){
            res.status(200).json({message:"Product Destroyed"})
        }
        else{
            res.status(500).json({
                message:"Failure"
            })
        }
        
    }).catch((error)=>{
        console.log(error);
        res.status(500).json({
            message:"Failure"
        })
    });
}

module.exports = { 
    getProductListController, 
    createProductController,
    retrieveProductController,
    updateProductController,
    deleteProductController
}