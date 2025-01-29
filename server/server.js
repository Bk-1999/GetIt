const express = require("express");
const cors = require("cors");

const app = express();

// Middleware to allow cross-origin requests
app.use(cors());

// Your product data
const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 }
];

// Routes
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Fetch products data
app.get("/products", (req, res) => {
    res.json(products);
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
});
