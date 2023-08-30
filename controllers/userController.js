const mongoose = require('mongoose');


const User=require('../models/user');

function userSignupController(req,res,next){
    User.find({email:req.body.email}).then((user)=>{
        if(user.length>=1)
        {
            return res.status(409).json({
                message:"Mail exists"
            })
        }
        else
        {
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if(err)
                {
                    return res.status(500).json({
                        error:err
                    });
                }
                else{
                    const user=new User({
                        _id:new mongoose.Types.ObjectId(),
                        email:req.body.email,
                        password:hash
                    });

                    user.save().then((result)=>{
                        console.log(result);
                        res.status(201).json({
                            message:"User created"
                        })
                    }).catch((err)=>{
                        console.log(err);
                        res.status(500).json({
                            error:err
                        })
                    })
                }
            })
        }
    })
}

function userDeleteController(req,res,next){
    const id=req.params.userId;
    
    User.findByIdAndDelete(id).then((result)=>{
        return res.status(200).json({
            message:"User Deleted"
        })
    }).catch((err)=>{
        console.log(err);
        return res.status(500).json({
            error:err
        })
    })
}

module.exports = { 
    userSignupController,
    userDeleteController
}