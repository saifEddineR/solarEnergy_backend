// require packages ____________________________________
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createProduct, getProduct } = require( '../controllers/productController' );

router.post('/add', authMiddleware, createProduct);
router.get('/', getProduct)
router.put('/:productId', authMiddleware, );

// DELETE service router (only superUser) _____________________________________
router.delete('/:productId', authMiddleware, );

module.exports = router;
