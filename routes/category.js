const express = require('express');
const categoryController = require('../controller/categoryController');

const verifyJwt = require("../middleware/jwt");

const router = express.Router();

router.get('/getCategory', verifyJwt, categoryController.getCategory);

router.get('/getCategory', categoryController.getCategoryById);

router.post('/createCategory', categoryController.createCategory);

router.post('/updateCategory', categoryController.updateCategory);


module.exports = router;