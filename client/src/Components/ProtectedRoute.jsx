import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (!user) {
    console.log('User not logged in.');

    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
