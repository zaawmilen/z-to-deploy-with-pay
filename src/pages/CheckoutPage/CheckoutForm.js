import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import './Checkoutpage.css';

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaymentLoading(true);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      console.error('Payment error:', error);
    } else if (paymentIntent.status === 'succeeded') {
      setPaymentSuccess(true);
      console.log('Payment successful');
    }

    setPaymentLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Payment Details</h2>
      <div className="form-group">
        <label htmlFor="card-element">Card Details</label>
        <CardElement className="card-element" />
      </div>
      <button type="submit" disabled={paymentLoading} className="submit-button">
        {paymentLoading ? 'Processing...' : 'Pay'}
      </button>
      {paymentSuccess && <p className="success-message">Payment successful!</p>}
    </form>
  );
};

export default CheckoutForm;
