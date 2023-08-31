const express=require('express');
const router=express.Router();


const checkAuth=require('../middlewares/check-auth');
const { 
    getProductListController,
    createProductController, 
    retrieveProductController,
    updateProductController,
    deleteProductController
}= require('../controllers/productControllers');

// Get all the products in the database
// Non logged in user should be able to access all the products
router.get('/',getProductListController);

// Not everyone should be able to create a product 
router.post('/create',checkAuth,createProductController);

// Get a particular product with id as productId
// Non logged in user should be able to access a particular product
router.get('/get/:productId',retrieveProductController)

// Only admins should be able to update a product
router.patch('/update/:productId',checkAuth,updateProductController)

// Only admins should be able to delete a product
router.delete('/delete/:productId',checkAuth,deleteProductController)


module.exports=router;


