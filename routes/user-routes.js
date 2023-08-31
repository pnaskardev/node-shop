const express = require('express');
const router = express.Router();


const {
    userSignupController,
    userDeleteController,
    userLoginController,
}=require('../controllers/userController');

router.post('/signup',userSignupController);

router.post('/login',userLoginController);

router.delete('/delete/:userId',userDeleteController);

module.exports=router;