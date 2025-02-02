import React, { useState } from 'react';
import api from '../api';  // Import API instance for Axios

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use api instead of axios
      await api.post('/products', { name, description, price });
      setMessage('Product added successfully!');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to add product.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </label>
      <button type="submit">Add Product</button>
      <p>{message}</p>
    </form>
  );
};

export default AddProduct;
