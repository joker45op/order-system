const express = require('express');
const router = express.Router();

// Import controllers
const exampleController = require('./controllers/exampleController');
const categoriesController = require('./controllers/categoriesController');

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



module.exports = router;
