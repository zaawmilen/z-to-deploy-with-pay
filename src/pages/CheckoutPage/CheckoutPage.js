import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import CheckoutForm from './CheckoutForm';
import './Checkoutpage.css'; // Import the CSS file

// Load Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const fetchCartTotal = () => {
      const cartItems = JSON.parse(localStorage.getItem('orderItems')) || [];
      const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return totalAmount; // Amount in dollars
    };

    const handleCreatePaymentIntent = async () => {
      try {
        const amount = fetchCartTotal(); // amount in dollars
        const response = await fetch('http://localhost:5000/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ items: JSON.parse(localStorage.getItem('orderItems')) }),
        });
        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);
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
