const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Server Error. Unable to retrieve products.' });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const { name, description, price, image } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required fields.' });
  }

  try {
    const newProduct = new Product({ name, description, price, image });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(400).json({ message: 'Unable to create product.' });
  }
};

module.exports = { getProducts, createProduct };
