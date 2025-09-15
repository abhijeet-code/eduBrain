import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, loading, children }) => {
  // First, wait until the initial loading check is complete
  if (loading) {
    return <div>Loading...</div>; // Or a spinner
  }

  // After loading, if the user is not logged in, redirect them to the homepage
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // If the user is logged in, render the component they were trying to access
  return children;
};

export default ProtectedRoute;