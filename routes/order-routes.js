const express=require('express');
const router =express.Router();


const checkAuth=require('../middlewares/check-auth');
const {
    getOrdersListController,
    createOrderController,
    retrieveOrderController,
    deleteOrderController
}=require('../controllers/orderController');


// Handle incoming GET Requests to ORDERS
router.get('/',checkAuth,getOrdersListController);

// Handle Create Product Requests
router.post('/create',checkAuth,createOrderController);

// Handle Get Particular Order Requests 
router.get('/retrieve/:orderId',checkAuth,retrieveOrderController);

router.delete('/delete/:orderId',checkAuth,deleteOrderController)

module.exports=router;