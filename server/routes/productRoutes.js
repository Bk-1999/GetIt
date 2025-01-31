const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController');
const router = express.Router();

/**
 * @route   GET /api/products
 * @desc    Get all products
 * @access  Public
 */
router.get('/', getProducts);

/**
 * @route   POST /api/products
 * @desc    Create a new product (Admin only)
 * @access  Private (you can add authentication middleware here if needed)
 */
router.post('/', createProduct);

module.exports = router;
