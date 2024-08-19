// header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useAuth } from '../../AuthoContext/AuthContext';
import './HeaderComponent.css';
import amazonLogo from '../../assets/images/amazon-logo.png';

const HeaderComponent = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="header">
      <div className="top-header">
        <Link to="/">
          <img src={amazonLogo} alt="Amazon Logo" className="amazon-logo" />
        </Link>
        <div className="deliver-to">
          <span>Deliver to: </span>
          <select>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="ug">Uganda</option>
            <option value="et">Ethiopia</option>
            <option value="br">Brazil</option>
          </select>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="header-options">
          <div className="language">
            <span>Language: </span>
            <select>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          {user ? (
            <div className="auth-section">
              <span className="user-name">Hello, {user.displayName || user.email}</span>
              <button onClick={handleSignOut} className="auth-button">Sign Out</button>
            </div>
          ) : (
            <>
              <Link to="/signin" className="auth-button">Sign In</Link>
              <Link to="/createaccount" className="auth-button">Create Account</Link>
            </>
          )}
          <Link to="/cart" className="cart-link"><FaShoppingCart /> Cart</Link>
        </div>
      </div>
      <div className="lower-header">
        <nav>
          <Link to="/deals">Today's Deals</Link>
          <Link to="/customer-service">Customer Service</Link>
          <Link to="/registry">Registry</Link>
          <Link to="/gift-cards">Gift Cards</Link>
          <Link to="/sell">Sell</Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
