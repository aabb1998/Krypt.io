import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (!user) {
    <Navigate to="login" />;
  } else {
    <Navigate to="account" />;
  }

  return children;
};

export default ProtectedRoute;
