// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import SignIn from './components/SignIn/signIn';
import CreateAccount from './components/SignIn/CreateAccount';
import HomePage from './pages/HomePage/HomePage';
import Product from './pages/ProductPage/Product';
import Order from './pages/Order/Order';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import './App.css';
import Cart from './pages/CartPage/Cart';
import DataProvider from './contexts/DataProvider';
import { AuthProvider } from './AuthoContext/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          
          <Route element={<ProtectedRoute
          msg= {"You must login to access your order"} redirectPath="/SignIn?redirect=/checkout" />}>
            <Route path="/order" element={<Order />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
