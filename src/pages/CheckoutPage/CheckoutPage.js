import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import mockCreatePaymentIntent from '../mockcheckoutpayment/mockCreatePaymentIntent'; // Adjust the path as needed
import CheckoutForm from './CheckoutForm';
import './Checkoutpage.css'; // Import the CSS file

const stripePromise = loadStripe('pk_test_51PjgFXCJYEcgaq1zMswXbOuTnkPZbRxQRZdlwA81EAGioIADJOFWXqITp1aEFiC7tt7dvVwSeS5XyvNAZk4sGkz300KsSn4YjY');
// console.log('Stripe API Key:', process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const fetchCartTotal = () => {
      const cartItems = JSON.parse(localStorage.getItem('orderItems')) || [];
      const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return totalAmount * 100; // Convert to cents
    };

    const handleCreatePaymentIntent = async () => {
      try {
        const amount = fetchCartTotal(); // amount in cents
        const secret = await mockCreatePaymentIntent(amount);
        setClientSecret(secret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
      }
    };

    handleCreatePaymentIntent();
  }, []);

  return (
    <div className="checkout-page">
      {clientSecret && (
        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default CheckoutPage;
