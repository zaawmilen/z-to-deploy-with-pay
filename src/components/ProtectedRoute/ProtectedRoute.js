// ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../AuthoContext/AuthContext';

const ProtectedRoute = ({ redirectPath = '/signin' }) => {
  const { user } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || redirectPath;

  return user ? <Outlet /> : <Navigate to={from} />;
};

export default ProtectedRoute;
