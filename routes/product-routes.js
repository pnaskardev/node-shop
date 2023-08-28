const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling GET requests to /products"
    });
})

router.get('/post',(req,res,next)=>{
    res.status(201).json({
        message:"Handling POST requests to /products"
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


