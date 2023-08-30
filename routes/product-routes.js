const express=require('express');
const router=express.Router();

const { 
    getProductListController,
    createProductController, 
    retrieveProductController,
    updateProductController,
    deleteProductController
}= require('../controllers/productControllers');

// Get all the products in the database
router.get('/',getProductListController);

router.post('/create',createProductController);

// Get a particular product with id as productId
router.get('/get/:productId',retrieveProductController)

router.patch('/update/:productId',updateProductController)

router.delete('/delete/:productId',deleteProductController)


module.exports=router;


