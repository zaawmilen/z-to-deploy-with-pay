import { loadStripe } from '@stripe/stripe-js';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { useState } from 'react';
import { app } from './firebase'; // your firebase.js file

// Initialize Stripe
const stripePromise = loadStripe('pk_test_51PjgFXCJYEcgaq1zMswXbOuTnkPZbRxQRZdlwA81EAGioIADJOFWXqITp1aEFiC7tt7dvVwSeS5XyvNAZk4sGkz300KsSn4YjY');

const CheckoutComponent = () => {
  const [clientSecret, setClientSecret] = useState('');

  const createPaymentIntent = async () => {
    const functions = getFunctions(app);
    const createPaymentIntent = httpsCallable(functions, 'createPaymentIntent');

    try {
      const result = await createPaymentIntent({ amount: 5000 }); // amount in cents
      setClientSecret(result.data.clientSecret);
    } catch (error) {
      console.error('Error creating payment intent:', error);
    }
  };

  const handlePayment = async () => {
    const stripe = await stripePromise;

    if (!clientSecret) {
      console.error('Client secret not set');
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: {
          number: '4242424242424242',
          exp_month: 12,
          exp_year: 2023,
          cvc: '123',
        },
      },
    });

    if (error) {
      console.error('Payment error:', error);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      console.log('Payment successful:', paymentIntent);
    }
  };

  return (
    <div>
      <button onClick={createPaymentIntent}>Create Payment Intent</button>
      {clientSecret && <button onClick={handlePayment}>Pay</button>}
    </div>
  );
};

export default CheckoutComponent;
