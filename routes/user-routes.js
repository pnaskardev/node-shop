const express = require('express');
const router = express.Router();


const {
    userSignupController,
    userDeleteController
}=require('../controllers/userController');

router.post('/signup',userSignupController);

router.delete('/delete/:userId',userDeleteController);

module.exports=router;