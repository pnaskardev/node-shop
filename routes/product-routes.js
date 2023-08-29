const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{

    const productsList=[
        {
            productName:"Iphone",
            price:"1lakh"
        },
        {
            productName:"Samsung Galaxy",
            price:"0.5Lakh"
        },
    ]

    res.status(200).json({
        message:"Handling GET requests to /products",
        products:productsList
    });
})

router.post('/post',(req,res,next)=>{
    const product={
        productName:req.body.productName,
        price:req.body.price
    }
    
    res.status(201).json({
        message:"Handling POST requests to /products",
        product:product
    })
})

router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    console.log(id);
    if(id!=null){
        res.json({
            message:"You passed an ID",
            id:id
        })
    }
    else{
        res.status(400).json({
            message:"No ID passed"
        })
    }
})

router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({message:"Product Updated"})
})

router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({message:"Product Destroyed"})
})


module.exports=router;


