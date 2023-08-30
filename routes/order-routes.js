const express=require('express');
const router =express.Router();

const {
    getOrdersListController,
    createOrderController,
    retrieveOrderController,
    deleteOrderController
}=require('../controllers/orderController');


// Handle incoming GET Requests to ORDERS
router.get('/',getOrdersListController);

// Handle Create Product Requests
router.post('/create',createOrderController);

// Handle Get Particular Order Requests 
router.get('/retrieve/:orderId',retrieveOrderController);

router.delete('/delete/:orderId',deleteOrderController)

module.exports=router;