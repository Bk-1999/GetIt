import React from 'react';
import { Navigate } from 'react-router-dom'; // Updated to use Navigate, not Redirect

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("user"); // Assuming you're checking if a user is logged in

  if (!user) {
    // If no user is logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  return children; // If the user is logged in, render the protected route
};

export default PrivateRoute;
