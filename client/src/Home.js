import React from "react";
import { useCart } from "./context/CartContext";

function Home() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];

  return (
    <div>
      <h1>Welcome to GetIt</h1>
      <p>Your e-commerce and delivery platform is coming soon!</p>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
