import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-green-500 text-2xl font-semibold mt-4">${product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-6">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
