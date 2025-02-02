import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('authToken');

  // If no token, redirect to login
  if (!token) {
    alert('You need to be logged in to access this page.');
    return <Navigate to="/login" />;
  }

  // If token exists, render the protected component
  return children;
}

export default PrivateRoute;
