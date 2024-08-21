import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import CheckoutForm from './CheckoutForm';
import createPaymentIntent from './createPaymentIntent'; // Import the new function
import './Checkoutpage.css'; // Import the CSS file

// Load Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    console.log('CheckoutPage rendered');
    const fetchCartItems = () => {
      return JSON.parse(localStorage.getItem('orderItems')) || [];
    };

    const handleCreatePaymentIntent = async () => {
      try {
        const items = fetchCartItems(); // Get the cart items from localStorage
        const clientSecret = await createPaymentIntent(items); // Create payment intent
        setClientSecret(clientSecret); // Set the client secret
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
