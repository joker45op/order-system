const express = require('express');
const router = express.Router();

// Import controllers
const exampleController = require('./controllers/exampleController');
const categoriesController = require('./controllers/categoriesController');
const productController = require('./controllers/productController');
const orderController = require('./controllers/orderController');

// Define routes
router.get('/example', exampleController.getExamples);
// router.post('/example', exampleController.createExample);
// router.get('/example/:id', exampleController.getExampleById);
// router.put('/example/:id', exampleController.updateExample);
// router.delete('/example/:id', exampleController.deleteExample);


// Categories
router.get('/categories', categoriesController.getAllCategories);
router.post('/categories', categoriesController.addCategory);
router.get('/categories/:id', categoriesController.getCategoryById);

// Products
router.get('/products', productController.getAllProducts);
router.post('/products', productController.addProduct);
router.get('/products/:id', productController.getProductById);

// Order 
router.get('/order', orderController.getAllOrders);
router.post('/order', orderController.addOrder);
router.get('/order/:id', orderController.getOrderById);

module.exports = router;
